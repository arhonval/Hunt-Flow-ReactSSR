const stageRouter = require('express').Router();
const { Stage, Candidate, History } = require('../../db/models');


stageRouter.post('/', async (req, res) => {
  const { candidateId, stageId } = req.body;
  try {
    const { login } = req.session;
    const candidate = await Candidate.findByPk(candidateId, { raw: true });
    console.log('candidate:', candidate);
    if (stageId <= candidate.stage_id) {
      res.json({ err: 'На данный этап перейти нельзя' });
    } else {
      await Candidate.update(
        { stage_id: stageId },
        { where: { id: candidateId } }
      );
      const newHistory = await History.create({
        candidate_id: candidateId,
        stage_id: stageId,
      });
      const updatedCandidateMeta = await Candidate.findByPk(candidateId, {
        include: [Stage],
      });
      const updatedCandidate = updatedCandidateMeta.get({ plain: true });
      res.json({ updatedCandidate, newHistory });
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = stageRouter;
