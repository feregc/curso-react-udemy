/**
 *
 * Rutas de Eventos
 * host + /api/events
 *
 */

const { Router } = require("express");
const { check } = require("express-validator");

const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");

const router = Router();

router.use( validarJWT );

//* Obtener Eventos
router.get("/", getEvents);

//* Crear un nuevo evento
router.post(
  '/',
  [
      check('title','El titulo es obligatorio').not().isEmpty(),
      check('start','Fecha de inicio es obligatoria').custom( isDate ),
      check('end','Fecha de finalización es obligatoria').custom( isDate ),
      validarCampos
  ],
  createEvent
);

//* Actualizar un Evento
router.put(
  "/:id",
  [
    check("title", "El título es obligatorio").not().isEmpty(),
    check("start", "La fecha de inicio es obligatoria").custom(isDate),
    check("end", "La fecha de finalización es obligatoria").custom(isDate),
    validarCampos,
  ],
  updateEvent
);

//* Eliminar un Evento
router.delete("/:id", deleteEvent);

module.exports = router;
