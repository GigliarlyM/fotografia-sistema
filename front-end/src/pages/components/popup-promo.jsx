import React from 'react';
import Modal from 'react-modal';

const PromoModal = ({ isOpen, onClose, onFormSubmit }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal de Promoção"
    >
      <h2>Adicionar Promoção</h2>
      <form onSubmit={onFormSubmit}>
        {/* Campos do formulário */}
        <input type="text" name="title" placeholder="Título da promoção" />
        <input type="number" name="discount" placeholder="Desconto (%)" />
        <button type="submit">Salvar</button>
      </form>
    </Modal>
  );
};

export default PromoModal;