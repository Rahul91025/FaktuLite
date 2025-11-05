const supabase = require('../db');

const getTexts = async (req, res) => {
  const { page, language } = req.query;
  try {
    const { data, error } = await supabase
      .from('texts')
      .select('*')
      .eq('page', page)
      .eq('language', language);

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ message: 'Database query failed', error: error.message });
    }
    res.json(data || []);
  } catch (err) {
    console.error('Server error:', err);
    if (err.message.includes('fetch failed')) {
      return res.status(503).json({ message: 'Service unavailable: Unable to connect to database' });
    }
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateText = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;
  const { data, error } = await supabase
    .from('texts')
    .update({ value })
    .eq('id', id);

  if (error) return res.status(500).json({ message: 'Error updating text' });
  res.json(data);
};

module.exports = { getTexts, updateText };
