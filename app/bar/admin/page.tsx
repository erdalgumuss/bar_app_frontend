'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import BaroDashboard from '@/components/pages/bar/BaroDashboard'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import AddMemberModal from '@/components/pages/bar/admin/AddMemberModal'
import ChangeMemberRoleModal from '@/components/pages/bar/admin/ChangeMemberRoleModal'
import DeleteMemberModal from '@/components/pages/bar/admin/DeleteMemberModal'
import { useAuthStore } from '@/stores/useAuthStore'
import useUserStore from '@/stores/useUserStore'
import { createUserWithPassword, deleteUser, updateUserRole } from '@/services/userService'

export default function MemberManagementPage() {
  const { users, fetchUsers, loading } = useUserStore()
  const [showAddMemberModal, setShowAddMemberModal] = useState(false)
  const [showChangeRoleModal, setShowChangeRoleModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedMember, setSelectedMember] = useState(null)
  const { role } = useAuthStore(state => state)
  const router = useRouter()

  // Admin olmayan kullanıcıları erişimden men etme
  useEffect(() => {
    if (role !== 'admin') {
      if (role === 'lawyer') {
        router.replace('/lawyer')
      } else if (role === 'baro_officer') {
        router.replace('/bar')
      }
    }
  }, [role, router])

  // Üyeleri Backend'den Çekme
  useEffect(() => {
    const loadMembers = async () => {
      await fetchUsers()  // Kullanıcıları çekiyoruz
    }
    loadMembers()
  }, [fetchUsers])

  // Yeni Üye Ekleme
  const onMemberAdded = async (NewUser) => {
    try {
      // Yeni üyeyi backend'e kaydediyoruz
      if (!NewUser.role) {
        alert('Lütfen bir rol seçin.')
        return
      }
  
      await createUserWithPassword({ role: NewUser.role, tcNumber: NewUser.tcNumber })
      console.log("rolu yazdır", NewUser.role)
      fetchUsers()  // Yeni üyeyi ekledikten sonra üyeleri tekrar çekiyoruz
      setShowAddMemberModal(false)
    } catch (error) {
      console.error('Üye eklerken hata:', error)
      alert('Üye eklenirken bir hata oluştu.')
    }
  }
  // Yetki Değiştirme
  const onRoleChanged = async (memberId, newRole) => {
    try {
      await updateUserRole(memberId, newRole)
      fetchUsers()  // Yetki değişiminden sonra üyeleri tekrar çekiyoruz
      setShowChangeRoleModal(false)
    } catch (error) {
      console.error('Yetki değiştirirken hata:', error)
      alert('Yetki değiştirilirken bir hata oluştu.')
    }
  }

  // Üye Silme
  const onMemberDeleted = async (memberId) => {
    try {
      await deleteUser(memberId)
      fetchUsers()  // Üye silindikten sonra üyeleri tekrar çekiyoruz
      setShowDeleteModal(false)
    } catch (error) {
      console.error('Üye silinirken hata:', error)
      alert('Üye silinirken bir hata oluştu.')
    }
  }

  // Modal Açma
  const openModal = (type, member = null) => {
    if (type === 'add') {
      setShowAddMemberModal(true)
    } else if (type === 'changeRole' && member) {
      setSelectedMember(member)
      setShowChangeRoleModal(true)
    } else if (type === 'delete' && member) {
      setSelectedMember(member)
      setShowDeleteModal(true)
    }
  }

  return (
    <BaroDashboard>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Üye Yönetimi</h1>
        <div className="flex space-x-4">
          <Button onClick={() => openModal('add')}>Avukat Ekle</Button>
          <Button onClick={() => openModal('add')}>Baro Üyesi Ekle</Button>
        </div>
        {loading ? (
          <p>Yükleniyor...</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>İsim</TableHead>
                <TableHead>Rol</TableHead>
                <TableHead>TC Kimlik No</TableHead>
                <TableHead>Referans No</TableHead>
                <TableHead>İşlemler</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.role === 'lawyer' ? 'Avukat' : 'Baro Üyesi'}</TableCell>
                  <TableCell>{member.tcNumber}</TableCell>
                  <TableCell>{member.password || 'Yok'}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => openModal('changeRole', member)}>
                        Yetki Değiştir
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => openModal('delete', member)}>
                        Sil
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
      {showAddMemberModal && (
        <AddMemberModal
          isOpen={showAddMemberModal}
          onClose={() => setShowAddMemberModal(false)}
          memberType={selectedMember?.role || 'lawyer' }
          onMemberAdded={onMemberAdded}
        />
      )}
      {showChangeRoleModal && selectedMember && (
        <ChangeMemberRoleModal
          isOpen={showChangeRoleModal}
          onClose={() => setShowChangeRoleModal(false)}
          member={selectedMember}
          onRoleChanged={onRoleChanged}
        />
      )}
      {showDeleteModal && selectedMember && (
        <DeleteMemberModal
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          member={selectedMember}
          onMemberDeleted={onMemberDeleted}
        />
      )}
    </BaroDashboard>
  )
}
