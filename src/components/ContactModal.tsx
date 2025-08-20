
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { MessageSquare } from 'lucide-react';

interface FormData {
  nome: string;
  telefone: string;
  email: string;
  assunto: string;
  mensagem: string;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
}

const ContactModal = ({ isOpen, onClose, serviceTitle }: ContactModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    telefone: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Olá! Gostaria de saber mais sobre: ${serviceTitle}

*Dados de contato:*
Nome: ${formData.nome}
Telefone: ${formData.telefone}
Email: ${formData.email}
Assunto: ${formData.assunto}

*Mensagem:*
${formData.mensagem}`;

    const phoneNumber = "12982147656";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    
    // Reset form and close modal
    setFormData({
      nome: '',
      telefone: '',
      email: '',
      assunto: '',
      mensagem: ''
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Entre em Contato</DialogTitle>
          <DialogDescription>
            Preencha o formulário abaixo para saber mais sobre: {serviceTitle}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome *</Label>
            <Input
              id="nome"
              name="nome"
              type="text"
              required
              value={formData.nome}
              onChange={handleInputChange}
              placeholder="Seu nome completo"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone *</Label>
            <Input
              id="telefone"
              name="telefone"
              type="tel"
              required
              value={formData.telefone}
              onChange={handleInputChange}
              placeholder="(00) 00000-0000"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="seu@email.com"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="assunto">Assunto *</Label>
            <Input
              id="assunto"
              name="assunto"
              type="text"
              required
              value={formData.assunto}
              onChange={handleInputChange}
              placeholder="Sobre o que gostaria de falar"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="mensagem">Mensagem</Label>
            <Textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleInputChange}
              placeholder="Conte-nos mais detalhes sobre o que precisa..."
              rows={3}
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancelar
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Enviar via WhatsApp
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
