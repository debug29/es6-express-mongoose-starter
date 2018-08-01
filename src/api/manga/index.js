import express from 'express';
import ctrl from './manga.ctrl';

const router = express.Router();

router.route('/manga')

    // GET /api/v1/manga - Get list of mangas
    .get(ctrl.getAll)

    // POST /api/v1/manga - Create new manga
    .post(ctrl.create);

router.route('/todo/:id')

    // DELETE /api/v1/manga/:id - Delete manga
    .delete(ctrl.remove)

    // PUT /api/v1/manga/:id - Update manga
    .put(ctrl.update);

export default router;
