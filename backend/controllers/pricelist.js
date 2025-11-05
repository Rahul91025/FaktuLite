const supabase = require('../db');

const getPricelist = async (req, res) => {
  const { data, error } = await supabase
    .from('pricelist')
    .select('*');

  if (error) return res.status(500).json({ message: 'Error fetching pricelist' });
  res.json(data);
};

const addProduct = async (req, res) => {
  const { product, in_price, price, description, quantity } = req.body;
  const { data, error } = await supabase
    .from('pricelist')
    .insert([{ product, in_price, price, description, quantity }])
    .select();

  if (error) return res.status(500).json({ message: 'Error adding product' });
  res.status(201).json(data[0]);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const { data, error } = await supabase
    .from('pricelist')
    .update(updates)
    .eq('id', id);

  if (error) return res.status(500).json({ message: 'Error updating product' });
  res.json(data);
};

module.exports = { getPricelist, addProduct, updateProduct };
