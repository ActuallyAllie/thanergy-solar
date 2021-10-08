import solarFarms from '../../data/solar-farms.json';

export default function handler(req, res) {
    res.status(200).json(solarFarms);
}
