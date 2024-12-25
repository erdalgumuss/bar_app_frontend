import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Message } from "@/types/case";

interface CommunicationAreaProps {
  caseData: {
    messages: Message[]; // Mesaj tipi tanımlandı
  };
}

export function CommunicationArea({ caseData }: CommunicationAreaProps) {
  const [newMessage, setNewMessage] = useState('');

  // Mesaj gönderme işlemi
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log("Gönderilen mesaj:", newMessage);
      setNewMessage('');
    }
  };

  const messages = caseData.messages || [];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">İletişim</h3>
      <ScrollArea className="h-[300px] bg-gray-700 p-4 rounded">
        {messages.length > 0 ? (
          messages.map((message: Message, index: number) => (
            <div
              key={index}
              className={`mb-4 ${message.sender === 'lawyer' ? 'text-right' : 'text-left'}`}
            >
              <div
                className={`inline-block p-2 rounded ${
                  message.sender === 'lawyer' ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              >
                <p className="font-medium">{message.sender}</p>
                <p>{message.message}</p>
                <p className="text-xs text-gray-400">{message.date}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Henüz mesaj bulunmamaktadır.</p>
        )}
      </ScrollArea>
      <div className="flex space-x-2">
        <Textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Mesajınızı yazın..."
          className="bg-gray-700 text-gray-100"
        />
        <Button onClick={handleSendMessage}>Gönder</Button>
      </div>
    </div>
  );
}
