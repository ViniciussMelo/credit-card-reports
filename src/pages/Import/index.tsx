import { FiUploadCloud } from 'react-icons/fi';
import React, { useState } from 'react';

import { 
  ImportContainer, 
  ImportTitle, 
  ImportDescription, 
  ImportHiddenInput, 
  ImportUploadLabel
} from './styles';

export function Import() {
  const [fileContent, setFileContent] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setFileContent(reader.result as string);
      console.log('Conteúdo do CSV: ', reader.result);
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