const {response} = require('express')

const Evento = require('../models/Evento')


const getEventos = async(req, res = response) => {

    const eventos = await Evento.find();


    res.json({
        ok:true,
        evento: eventos
    })
}



const crearEvento = async(req, res = response) => {
    
    const evento = new Evento(req.body);

    try {   

        evento.user = req.uid;

        const eventoGuardado = await evento.save();
        res.status(200).json({
            ok: true,
            evento: eventoGuardado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        })
    }
}

const actualizarEvento = async(req, res = response) => {


    const eventoId = req.params.id;
    const uid = req.uid

    try {

        const evento = await Evento.findById(eventoId);

        if(!evento){
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            })  
        }

        if(evento.user.toString() !== uid){
            return res.status(401).json({
                ok:false,
                msg: 'No tiene privilegio de editar este envento'
            })
        }

        const nuevoEvento = {
            ...req.body,
            user:uid
        }

        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, {new: true});

        res.json({
            ok:true,
            evento: eventoActualizado
        })
        
    } catch (error) {

        console.log(error)

        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        })        
    }

    res.json({
        ok:true,
        msg: 'actualizarEvento'
    })
}

const eliminarEvento = async(req, res = response) => {

    const eventoId = req.params.id;
    const uid = req.uid


    try {
        const evento = await Evento.findById(eventoId);

        if(!evento){
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            })  
        }

        if(evento.user.toString() !== uid){
            console.log(evento.user.toString())
            console.log(uid)
            return res.status(401).json({
                ok:false,
                msg: 'No tiene privilegio de eliminar este envento'
            })
        }
        await Evento.findByIdAndDelete(eventoId);

        res.json({
            ok:true,
            msg: 'Evento borrado' 
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msag: 'Hable con el admin'
        })
    }
}



module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}