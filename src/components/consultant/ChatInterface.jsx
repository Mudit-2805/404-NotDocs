import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const ChatInterface = ({ doctor }) => {
  const { currentUser } = useAuth();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef(null);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Generate initial messages when doctor changes
  useEffect(() => {
    if (doctor) {
      setMessages([
        {
          id: 1,
          sender: 'doctor',
          text: `Hello ${currentUser?.name || 'there'}! I'm ${doctor.name}. How can I help you today?`,
          time: new Date(Date.now() - 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  }, [doctor, currentUser]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, userMessage]);
    setInput('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate doctor response after delay
    setTimeout(() => {
      const doctorMessage = {
        id: messages.length + 2,
        sender: 'doctor',
        text: generateResponse(input, doctor),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, doctorMessage]);
      setIsTyping(false);
    }, 2000);
  };
  
  // Simple response generator based on message content
  const generateResponse = (message, doctor) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('appointment') || lowerMessage.includes('schedule')) {
      return `I'd be happy to schedule an appointment for you. My next available slots are on Monday at 2:00 PM or Wednesday at 10:00 AM. Would either of those work for you?`;
    }
    
    if (lowerMessage.includes('prescription') || lowerMessage.includes('refill')) {
      return `I'll review your prescription needs. To process a refill, please let me know which medication you need, and I'll send it to your pharmacy.`;
    }
    
    if (lowerMessage.includes('result') || lowerMessage.includes('test')) {
      return `Your recent test results have been uploaded to your patient portal. Everything looks normal, but I'd be happy to discuss any specific concerns you might have.`;
    }
    
    if (lowerMessage.includes('pain') || lowerMessage.includes('hurts')) {
      return `I'm sorry to hear you're in pain. Can you describe where the pain is located, how severe it is on a scale of 1-10, and how long you've been experiencing it? This will help me better assess your situation.`;
    }
    
    if (lowerMessage.includes('thank')) {
      return `You're welcome! Don't hesitate to reach out if you have any other questions or concerns.`;
    }
    
    // Default response
    return `Thank you for your message. As a ${doctor.specialty}, I recommend we discuss this further. Could you provide more details about your symptoms or concerns?`;
  };
  
  return (
    <div className="chat-interface">
      <div className="chat-header">
        <div className="doctor-info">
          <img src={doctor.image} alt={doctor.name} className="doctor-avatar" />
          <div>
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
          </div>
        </div>
        
        <div className="chat-actions">
          <button className="video-call-btn">Video Call</button>
        </div>
      </div>
      
      <div className="chat-messages">
        {messages.map(message => (
          <div key={message.id} className={`message ${message.sender}`}>
            <div className="message-content">
              <p>{message.text}</p>
              <span className="message-time">{message.time}</span>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="message doctor">
            <div className="message-content typing">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={endOfMessagesRef} />
      </div>
      
      <form className="chat-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" disabled={!input.trim()}>Send</button>
      </form>
      
      <div className="attachments">
        <button className="attachment-button">📎 Attach Files</button>
        <button className="attachment-button">📋 Share Records</button>
        <button className="attachment-button">📅 Schedule Appointment</button>
      </div>
    </div>
  );
};

export default ChatInterface;