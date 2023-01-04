const express = require('express');
const empleados = express.Router();
const db = require('../config/database');
 
empleados.post("/", async(req,res,next)=>{
    
    const {ap_Paterno, ap_Materno, nombre, telefono, direccion, correoElectronico} = req.body;
    console.log(req.body);
    //const x = new Boolean(True);
    if(ap_Paterno && ap_Materno && nombre && telefono && direccion){
        console.log("wasd");
        let query = "INSERT INTO empleados(ap_Paterno, ap_Materno, nombre, telefono, direccion, correoElectronico)";
        query += `VALUES ('${ap_Paterno}','${ap_Materno}','${nombre}','${telefono}','${direccion}','${correoElectronico}')`;
        console.log("asdasd22");
        const rows = await db.query(query);
        console.log(rows);

        if(rows.affectedRows ==1){
            return res.status(201).json({code: 201 ,message: "Empleado insertado correctamente"});
        }

        return res.status(505).json({code: 505, message: "Ocurrio un error"});
    }
    return res.status(505).json({code: 505, message: "Campos incompletos"});
    
});

empleados.delete("/:id([0,9]{1,3})", async(req,res,next)=>{
    
    const query = `DELETE FROM empleados WHERE id_Empleado=${req.params.id}`;
    const rows = await db.query(query);

    if(rows,affectedRows){
        return res.status(200).json({code:200,message:"Empleado borrado correctamente"});
    }
    return res.status(404).json({code: 404, message: "Empleado no encontrado"});

});

empleados.put("/:id([0,9]{1,3})", async(req,res,next)=>{
    if(id_Empleado && ap_Paterno && ap_Materno && nombre && telefono && direccion && correoElectronico && tipo){
       let query = `UPDATE empleados SET id_Empleado='${id_Empleado}',ap_Paterno=${ap_Paterno},`;
        query += `ap_Materno=${ap_Materno},nombre=${nombre} WHERE id_Empleado=${req.params.id};`;
    
        const rows = await db.query(query);
        console.log(rows);

        if(rows.affectedRows ==1){
            return res.status(200).json({code: 200 ,message: "Empleado actualizado correctamente"});
        }

        return res.status(505).json({code: 505, message: "Ocurrio un error"});
    }
    return res.status(505).json({code: 505, message: "Campos incompletos"});
    
});

empleados.patch("/:id([0,9]{1,3})", async(req,res,next)=>{
        if(req.body.id_Empleado){
        let query = `UPDATE empleados SET id_Empleado='${req.body.id_Empleado}'WHERE id_Empleado=${req.params.id}`
        const rows = await db.query(query);

        if(rows.affectedRows ==1){
            return res.status(200).json({code: 200 ,message: "Empleado actualizado correctamente"});
        }
        return res.status(500).json({code: 200, message: "Ocurrio un error"});
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"});
});

empleados.get('/', async(req,res,next)=>{
    const pkmn = await db.query("SELECT * FROM empleados");
    return res.status(201).json({code: 201, message: pkmn});
});

empleados.get('/:id [0-9]{1,3}',async (req,res,next) => {
    const id = req.params.id;
    if(id >= 0 && id <= 722){
        const pkmn = await db.query("SELECT * FROM empleados WHERE id_Empleado="+id+";");
        return res.status(200).json({code: 200 ,message: pkmn});
    }
      return res.status(404).send({code: 404, message: "Empleados no encontrado"});
    
});

empleados.get('/:name([A-Za-z]+)', async(req,res,next) => {
    const name = req.params.name;
    const pkmn = await db.query("SELECT * FROM empleados WHERE id_Empleado="+name+";");
    if(pkmn.length>0){
        return res.status(200).json({code: 200 ,message: pkmn});
    }  
    return res.status(404).res.send({code: 404, message: "Empleado no encontrado"});
});

module.exports = empleados;