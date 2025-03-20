const InquiryTable = () => {
    const inquiries = [
      { id: 1, name: "Isaac A.", type: "Commercial", date: "28/05/22", contact: "(207) 555-0133", status: "Done" },
      { id: 2, name: "Farah S.", type: "Residential", date: "26/05/22", contact: "(480) 555-0103", status: "Pending" },
      { id: 3, name: "Vivian F.", type: "Commercial", date: "25/05/22", contact: "(252) 555-0126", status: "Pending" },
      { id: 4, name: "Jared I.", type: "Commercial", date: "23/05/22", contact: "(629) 555-0129", status: "Done" },
      { id: 5, name: "Adrian V.", type: "Residential", date: "20/05/22", contact: "(209) 555-0109", status: "Pending" }
    ];
  
    return (
      <div className="bg-white p-6 shadow-lg rounded-xl">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Recent Inquiry</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Property Type</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Contact Number</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inquiry) => (
                <tr key={inquiry.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 text-gray-600">{inquiry.id}</td>
                  <td className="p-3 text-gray-800">{inquiry.name}</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-white text-sm ${inquiry.type === "Commercial" ? "bg-orange-500" : "bg-teal-500"}`}>{inquiry.type}</span>
                  </td>
                  <td className="p-3 text-gray-600">{inquiry.date}</td>
                  <td className="p-3 text-gray-600">{inquiry.contact}</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-white text-sm ${inquiry.status === "Done" ? "bg-green-500" : "bg-yellow-500"}`}>{inquiry.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default InquiryTable;
  