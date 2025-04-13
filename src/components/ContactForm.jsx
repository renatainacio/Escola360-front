export default function ContactForm() {
    return (
      <form className="bg-white p-6 rounded-lg shadow max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Entre em contato</h2>
  
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">Nome completo</label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Digite seu nome"
          />
        </div>
  
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Digite seu e-mail"
          />
        </div>
  
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="subject">Assunto</label>
          <input
            type="text"
            id="subject"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Digite o assunto"
          />
        </div>
  
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1" htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Escreva sua mensagem"
          ></textarea>
        </div>
  
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
    );
  }
  