db.carros.insertMany([
    { "placa": "ABC123", 
      "numero_serie": "XYZ987654", 
      "modelo": 2022,
      "marca": "Toyota", 
      "kilometraje": 15000, 
      "tipo": "SUV" 
    },
    { "placa": "DEF456",
      "numero_serie": "LMN123456", 
      "modelo": 2020,
      "marca": "Honda", 
      "kilometraje": 22000,
      "tipo": "Sedán" 
    },
    { "placa": "GHI789", 
      "numero_serie": "OPQ789123",
      "modelo": 2019,
      "marca": "Ford", 
      "kilometraje": 35000,
      "tipo": "Pickup" 
    },
    { "placa": "JKL012", 
      "numero_serie": "RST456789", 
      "modelo": 2021, 
      "marca": "Chevrolet", 
      "kilometraje": 18000, 
      "tipo": "SUV" 
    },
    { "placa": "MNO345", 
      "numero_serie": "UVW123789", 
      "modelo": 2023, 
      "marca": "Nissan", 
      "kilometraje": 5000, 
      "tipo": "Sedán" 
    }
]);

// Consultar
db.carros.find();  

// Mostrar los documentos en la colección "carros"

db.carros.find({}, { "placa": 1, "marca": 1 });  

// Mostrar solo los campos "placa" y "marca" de cada documento

// Actualizaciones
db.carros.updateOne(
    { "placa": "ABC123" },
    { $set: { "kilometraje": 16000 } }
);

db.carros.updateMany(
    { "marca": "Toyota" },
    { $set: { "tipo": "Hatchback" } }
);
