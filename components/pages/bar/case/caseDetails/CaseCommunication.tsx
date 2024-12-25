import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Case, Message } from '@/types/case';

interface CaseCommunicationProps {
  caseData: Case; // Dava bilgisi
  onUpdate: (updatedData: Partial<Case>) => void; // Güncelleme işlemi
}

export default function CaseCommunication({ caseData, onUpdate }: CaseCommunicationProps) {
  const [newMessage, setNewMessage] = useState(''); // Yeni mesaj içeriği

  // Mesaj gönderme işlemi
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const updatedMessages: Message[] = [
        ...caseData.messages,
        {
          sender: 'Bar Officer', // Mesajı gönderen
          message: newMessage,
          date: new Date().toISOString(),
        },
      ];
      onUpdate({ messages: updatedMessages }); // Güncellenmiş mesajları üst bileşene gönder
      setNewMessage(''); // Mesaj alanını sıfırla
    }
  };

  return (
    <div className="space-y-6">
      {/* İletişim Geçmişi */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Communication History</h3>
        {caseData.messages.map((message, index) => (
          <Card key={index} className="bg-gray-700 text-gray-100">
            <CardHeader>
              <CardTitle className="text-sm">
                {message.sender} - {new Date(message.date).toLocaleString()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{message.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Yeni Mesaj Gönder */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">New Message</h3>
        <div className="space-y-2">
          <Label htmlFor="newMessage">Your Message</Label>
          <Textarea
            id="newMessage"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="bg-gray-700 text-gray-100"
            rows={4}
          />
        </div>
        <Button
          onClick={handleSendMessage}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          Send Message
        </Button>
      </div>
    </div>
  );
}
