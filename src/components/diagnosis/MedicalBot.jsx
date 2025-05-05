import React, { useState, useRef, useEffect } from 'react';

const MedicalBot = () => {
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState([
    { role: 'bot', content: 'Hello! I\'m your virtual medical assistant. How can I help you today? You can describe your symptoms, ask health questions, or get information about common conditions.' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    const chatMessagesContainer = document.querySelector('.chat-messages');
    if (chatMessagesContainer) {
      chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    }
  }, [conversation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message to conversation
    const userMessage = { role: 'user', content: input };
    setConversation([...conversation, userMessage]);
    
    // Clear input field
    setInput('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate bot response after delay
    setTimeout(() => {
      const botResponse = generateResponse(input);
      setConversation(prev => [...prev, { role: 'bot', content: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  // Simple response generator based on keywords
  const generateResponse = (message) => {
    const lowerCase = message.toLowerCase();
    
    if (lowerCase.includes('headache') || lowerCase.includes('head pain') || lowerCase.includes('migraine')) {
      return "Headaches can be caused by stress, dehydration, lack of sleep, or tension. For occasional headaches, you might try: 1) drinking water, 2) resting in a dark, quiet room, 3) using over-the-counter pain relievers like acetaminophen or ibuprofen, 4) applying a cool compress. If you experience severe, persistent, or unusual headaches, please consult a healthcare provider.";
    }
    
    if (lowerCase.includes('fever') || lowerCase.includes('temperature')) {
      return "Fever is often a sign that your body is fighting an infection. For adults, you can manage mild fevers (below 102°F/39°C) by: 1) staying hydrated, 2) resting, 3) taking acetaminophen or ibuprofen as directed, 4) using a lukewarm compress. Seek medical attention for high fevers, fevers lasting more than 3 days, or if accompanied by severe symptoms.";
    }
    
    if (lowerCase.includes('cough') || lowerCase.includes('sore throat')) {
      return "Coughs and sore throats are common with colds, flu, and allergies. You might find relief with: 1) staying hydrated, 2) using throat lozenges, 3) trying warm tea with honey, 4) using a humidifier. If you have difficulty breathing, severe pain, or symptoms lasting more than a week, please consult a healthcare provider.";
    }
    
    if (lowerCase.includes('stomach') || lowerCase.includes('nausea') || lowerCase.includes('vomiting')) {
      return "Stomach issues can be caused by many factors including food poisoning, viruses, or digestive problems. Try: 1) staying hydrated with small sips of water, 2) eating bland foods when able, 3) avoiding dairy, spicy or fatty foods, 4) resting. Seek medical attention if you experience severe pain, inability to keep fluids down, or symptoms lasting more than 2 days.";
    }
    
    if (lowerCase.includes('rash') || lowerCase.includes('skin')) {
      return "Skin rashes can be caused by allergic reactions, infections, or irritants. Without seeing the rash, I can suggest: 1) avoiding scratching, 2) using mild, fragrance-free soap, 3) applying cool compresses, 4) trying over-the-counter hydrocortisone cream for itching. If the rash is spreading rapidly, painful, or accompanied by other symptoms, please consult a healthcare provider.";
    }
    
    if (lowerCase.includes('covid') || lowerCase.includes('coronavirus')) {
      return "COVID-19 symptoms can include fever, cough, fatigue, loss of taste/smell, and more. If you suspect you have COVID-19: 1) get tested, 2) isolate from others, 3) rest and stay hydrated, 4) monitor your symptoms. Seek emergency care if you experience severe breathing difficulty, persistent chest pain, confusion, or bluish lips or face.";
    }
    
    return "I understand you're concerned about your health. While I can provide general information, I can't diagnose specific conditions. Could you provide more details about your symptoms? Remember, for any serious concerns, it's always best to consult with a healthcare professional directly.";
  };

  return (
    <div className="diagnosis-card medical-bot">
      <h2>Virtual Medical Assistant</h2>
      <div className="chat-container">
        <div className="chat-messages">
          {conversation.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              <div className="message-content">
                {message.content}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          
          <div ref={chatEndRef} />
        </div>
        
        <form className="chat-input" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your symptoms or ask a health question..."
            disabled={isTyping}
          />
          <button type="submit" disabled={isTyping || !input.trim()}>
            Send
          </button>
        </form>
        
        <div className="bot-disclaimer">
          <p>
            <strong>Note:</strong> This bot provides general information only and is not a substitute for 
            professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicalBot;