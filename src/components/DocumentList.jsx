export default function DocumentList() {
    return (
      <div className="bg-white p-6 rounded-lg shadow max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Documentos Enviados</h2>
  
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">Documento</th>
              <th className="py-2 px-4 border-b text-left">Tipo</th>
              <th className="py-2 px-4 border-b text-left">Data</th>
              <th className="py-2 px-4 border-b text-left">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Boletim 1º Bimestre</td>
              <td className="py-2 px-4 border-b">Boletim</td>
              <td className="py-2 px-4 border-b">15/03/2025</td>
              <td className="py-2 px-4 border-b">
                <button className="text-blue-600 hover:underline">Download</button>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Atestado de Matrícula</td>
              <td className="py-2 px-4 border-b">Atestado</td>
              <td className="py-2 px-4 border-b">10/02/2025</td>
              <td className="py-2 px-4 border-b">
                <button className="text-blue-600 hover:underline">Download</button>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Declaração de Frequência</td>
              <td className="py-2 px-4 border-b">Declaração</td>
              <td className="py-2 px-4 border-b">25/01/2025</td>
              <td className="py-2 px-4 border-b">
                <button className="text-blue-600 hover:underline">Download</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  