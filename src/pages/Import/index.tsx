import { FiUploadCloud } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React from 'react';

import { 
  ImportContainer, 
  ImportTitle, 
  ImportDescription, 
  ImportHiddenInput, 
  ImportUploadLabel
} from './styles';
import { parseCSV } from '../../utils/csv';
import { setChargers } from '../../reducers/charges/actions';
import { getMonthFromDate } from '../../utils/date';

export function Import() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const content = reader.result as string;
      const parsed = parseCSV(content);

      if(parsed.length) {
        const firstDate = parsed[0].date;
        const month = getMonthFromDate(firstDate);
        dispatch(setChargers(month, parsed))
        navigate('/report')
      }
    };

    reader.readAsText(file);
  }

  return (
    <ImportContainer>
      <ImportTitle>Importar Arquivo CSV</ImportTitle>
      <ImportDescription>Escolha um arquivo CSV com suas cobranças de cartão de crédito.</ImportDescription>
      <ImportUploadLabel>
        <FiUploadCloud size={20} /> Selecionar Arquivo
        <ImportHiddenInput type="file" accept=".csv" onChange={handleFileChange} />
      </ImportUploadLabel>
    </ImportContainer>
  )
}