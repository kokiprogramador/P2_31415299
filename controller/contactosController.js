import contactosModel from '../model/contactosModel.js';

const model = new contactosModel();

class ContactosController {
    static add(req, res) {
        const { email, nombre, comentario } = req.body;
        const ip = req.ip;
        const fecha_hora = new Date().toISOString();

        if (!email || !nombre || !comentario) {
            return res.status(400).send("Datos incompletos");
        }
        console.log(`Fecha: ${fecha_hora} Ip ${ip} Email: ${email} Nombre: ${nombre} Comentario: ${comentario}`)

        const contacto = { email, nombre, comentario, ip, fecha_hora };
        model.save(contacto, (err) => {
            if (err) {
                return res.status(500).send("Error al guardar los datos");
            }
            res.redirect('/success');
        });
    }

    static showForm(req, res) {
        res.render('formulario');
    }

    static showSuccess(req, res) {
        res.render('success');
    }
}

export default ContactosController;
