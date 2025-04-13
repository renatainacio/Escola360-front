export default function AcademicModule() {
    return (
      <div className="bg-white p-6 rounded-lg shadow max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Desempenho Acadêmico</h2>
  
        <div className="mb-4">
          <p><span className="font-medium">Aluno:</span> João da Silva</p>
          <p><span className="font-medium">Turma:</span> 7º ano B</p>
          <p><span className="font-medium">Ano letivo:</span> 2025</p>
        </div>
  
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">Disciplina</th>
              <th className="py-2 px-4 border-b text-left">Nota</th>
              <th className="py-2 px-4 border-b text-left">Frequência</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Matemática</td>
              <td className="py-2 px-4 border-b">8,5</td>
              <td className="py-2 px-4 border-b">95%</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Português</td>
              <td className="py-2 px-4 border-b">9,0</td>
              <td className="py-2 px-4 border-b">98%</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Ciências</td>
              <td className="py-2 px-4 border-b">7,8</td>
              <td className="py-2 px-4 border-b">93%</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  