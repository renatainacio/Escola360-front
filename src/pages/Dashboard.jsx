import { useState } from "react";
import ContactForm from "../components/ContactForm";
import AcademicModule from "../components/AcademicModule";
import DocumentList from "../components/DocumentList";

export default function Dashboard() {
  const [selected, setSelected] = useState("Início");

  const menuItems = [
    "Início",
    "Desempenho",
    "Documentos",
    "Contato"
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => setSelected(item)}
                className={`cursor-pointer p-2 rounded-lg hover:bg-gray-200 ${
                  selected === item ? "bg-gray-300 font-semibold" : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <div className="bg-white shadow p-4 text-xl font-semibold">
          Bem-vindo ao Escola360
        </div>
        <main className="p-6">
          <h1 className="text-3xl font-bold mb-4">{selected}</h1>

          {selected === "Contato" ? (
            <ContactForm />
          ) : selected === "Desempenho" ? (
            <AcademicModule />
          ) : selected === "Documentos" ? (
            <DocumentList />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-2">Informações do Aluno</h2>
                <p><strong>Nome:</strong> João da Silva</p>
                <p><strong>Turma:</strong> 7º ano B</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-2">Próxima Avaliação</h2>
                <p><strong>Matéria:</strong> Ciências</p>
                <p><strong>Data:</strong> 17 de Abril</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-2">Última Mensagem</h2>
                <p>"Lembrete: entrega do trabalho de História até sexta-feira!"</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-2">Avisos</h2>
                <ul className="list-disc ml-5">
                  <li>Reunião de pais dia 20/04</li>
                  <li>Vacinação escolar próxima semana</li>
                  <li>Prazo para atualização de dados cadastrais</li>
                </ul>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}