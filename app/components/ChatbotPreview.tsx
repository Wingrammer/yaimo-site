import { useState } from 'react';

export default function ChatbotPreview() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I’m your AI onboarding assistant. What’s your name?' },
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { sender: 'user', text: input },
      { sender: 'bot', text: simulateBotReply(input) },
    ];
    setMessages(newMessages);
    setInput('');
  };

  const simulateBotReply = (userText: string) => {
    if (/name|called/i.test(userText)) {
      return `Nice to meet you, ${userText.replace(/[^a-z ]/gi, '').split(' ').pop()}! Do you have a driver's license?`;
    } else if (/yes/i.test(userText)) {
      return 'Perfect! Let’s move to the next step. What city are you based in?';
    } else if (/no/i.test(userText)) {
      return 'No worries! You can apply later. Let me know when you’re ready.';
    } else {
      return 'Got it. I’m still learning, but I’ll do my best to help!';
    }
  };

  return (
    <section className="bg-white/5 border border-white/10 p-6 rounded-xl max-w-xl mx-auto space-y-4">
      <h3 className="text-xl font-semibold text-center">AI Driver Chat Preview</h3>
      <div className="h-64 overflow-y-auto bg-black/10 p-4 rounded text-sm space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs ${
                msg.sender === 'user'
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white border border-white/10'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
        >
          Send
        </button>
      </form>
    </section>
  );
}
