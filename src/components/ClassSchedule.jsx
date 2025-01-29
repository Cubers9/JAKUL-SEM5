import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import jadwalData from '/public/jadwal.csv?raw'; // Import CSV di bagian atas file

const ClassSchedule = () => {
  const [scheduleData, setScheduleData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilter, setSearchFilter] = useState('all');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Proses data CSV
    try {
      const rows = jadwalData.split('\n');
      const headers = rows[0].split(',');
      
      const parsedData = rows.slice(1).map(row => {
        const values = row.split(',');
        return headers.reduce((obj, header, index) => {
          obj[header.trim()] = values[index]?.trim() || '';
          return obj;
        }, {});
      }).filter(row => Object.values(row).some(value => value));

      setScheduleData(parsedData);
      setFilteredData(parsedData); // Set filtered data awal
    } catch (error) {
      console.error('Error processing CSV:', error);
    }
  }, []); // useEffect akan dijalankan sekali saat komponen dimount

  const handleSearch = () => {
    const searchTerm = searchQuery.toLowerCase();
    
    const result = scheduleData.filter(item => {
      switch(searchFilter) {
        case 'dosen':
          return item.DOSEN?.toLowerCase().includes(searchTerm);
        case 'kode':
          return item.Kode_Kelas?.toLowerCase().includes(searchTerm);
        case 'ruang':
          return item.RUANG?.toLowerCase().includes(searchTerm);
        default:
          return (
            item.DOSEN?.toLowerCase().includes(searchTerm) ||
            item.Kode_Kelas?.toLowerCase().includes(searchTerm) ||
            item.RUANG?.toLowerCase().includes(searchTerm)
          );
      }
    });

    setFilteredData(result);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Jadwal Kelas</h1>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Cari..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <select
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">Semua</option>
          <option value="dosen">Dosen</option>
          <option value="kode">Kode Kelas</option>
          <option value="ruang">Ruang</option>
        </select>
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded flex items-center"
        >
          <Search size={20} className="mr-2" /> Cari
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">KELAS</th>
            <th className="border p-2">HARI</th>
            <th className="border p-2">MATA KULIAH</th>
            <th className="border p-2">WAKTU</th>
            <th className="border p-2">RUANG</th>
            <th className="border p-2">DOSEN</th>
            <th className="border p-2">Kode Kelas</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={index} className="border">
                <td className="border p-2">{item.KELAS}</td>
                <td className="border p-2">{item.HARI}</td>
                <td className="border p-2">{item.MATA_KULIAH}</td>
                <td className="border p-2">{item.WAKTU}</td>
                <td className="border p-2">{item.RUANG}</td>
                <td className="border p-2">{item.DOSEN}</td>
                <td className="border p-2">{item.Kode_Kelas}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center p-4">Tidak ada data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ClassSchedule;
