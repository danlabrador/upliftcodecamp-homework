import React, { useContext, useEffect, useState } from "react";
import warnIcon from "../assets/warn.png";
import EditProfileContext from "../context/EditProfileContext";
import { EditProfileFields } from "../models/EditProfileFields";

interface InputTextGroupProps {
  label: string;
  id: string;
  type: string;
  isRequired: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export function InputTextGroup({ label, id, type, isRequired, value, setValue }: InputTextGroupProps): JSX.Element {
  const [ hasError, setHasError ] = useState<boolean>(false);
  const [ statusMessage, setStatusMessage ] = useState<string>('');
  const [ spanStatusClass, setSpanStatusClass ] = useState('hidden');
  const [ blurred, setBlurred ] = useState(false);
  const { errorStatuses, setErrorStatuses } = useContext(EditProfileContext) as EditProfileFields;

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  }

  const handleBlur = async () => {
    setBlurred(true);
  }

  useEffect(() => {
    if (!blurred) return;

    if (value === '') {
      setStatusMessage('This field is required.');
      setSpanStatusClass('text-white bg-red-600');
      setHasError(true);
    } else if(value !== '') {
      setStatusMessage('');
      setSpanStatusClass('hidden');
    }

    if (id==='name' && value.trim().split(' ').length < 2) {
      setStatusMessage('You must input your full name.');
      setSpanStatusClass('text-white bg-red-600');
      setHasError(true);
      
      const newErrorStatuses = { ...errorStatuses };
      newErrorStatuses[id] = true;
      setErrorStatuses(newErrorStatuses);
    } else if (id==='name' && value.trim().split(' ').length >= 2){
      setHasError(false);

      const newErrorStatuses = { ...errorStatuses };
      newErrorStatuses[id] = false;
      setErrorStatuses(newErrorStatuses);
    }

    if (id==='contact-name' && value.trim().split(' ').length < 2) {
      setStatusMessage('You must input their full name.');
      setSpanStatusClass('text-white bg-red-600');
      setHasError(true);
      
      const newErrorStatuses = { ...errorStatuses };
      newErrorStatuses[id] = true;
      setErrorStatuses(newErrorStatuses);
    } else if (id==='contact-name' && value.trim().split(' ').length >= 2) {
      setHasError(false);
      
      const newErrorStatuses = { ...errorStatuses };
      newErrorStatuses[id] = false;
      setErrorStatuses(newErrorStatuses);
    }

    if (id==='role' && value.length < 3) {
      setStatusMessage('Role must be at least 3 characters long.');
      setSpanStatusClass('text-white bg-red-600');
      setHasError(true);
    } else if (id==='role' && value.length >= 3) {
      setHasError(false);
      
      const newErrorStatuses = { ...errorStatuses };
      newErrorStatuses[id] = false;
      setErrorStatuses(newErrorStatuses);
    }

    if (type === 'email' && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setStatusMessage('Please enter a valid email address.');
      setSpanStatusClass('text-white bg-red-600');
      setHasError(true);
      
      const newErrorStatuses = { ...errorStatuses };
      newErrorStatuses[id] = true;
      setErrorStatuses(newErrorStatuses);
    } else if (type === 'email' && value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setHasError(false);
      
      const newErrorStatuses = { ...errorStatuses };
      newErrorStatuses[id] = false;
      setErrorStatuses(newErrorStatuses);
    }

    if (type === 'phone' && !value.match(/^\+?\d{10,}$/)) {
      setStatusMessage('Please enter a valid phone number.');
      setSpanStatusClass('text-white bg-red-600');
      setHasError(true);
      
      const newErrorStatuses = { ...errorStatuses };
      newErrorStatuses[id] = true;
      setErrorStatuses(newErrorStatuses);
    } else if (type === 'phone' && value.match(/^\+?\d{10,}$/)) {
      setHasError(false);
      
      const newErrorStatuses = { ...errorStatuses };
      newErrorStatuses[id] = false;
      setErrorStatuses(newErrorStatuses);
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, id, type, blurred, hasError])

  return (
    <div className="flex flex-col mb-8">
      {/* Add label */}
      <label htmlFor={id} className="mb-2 text-sm font-bold text-gray-600">{label}</label>
      <input id={id} type={type} className="border p-2 rounded-md" required={isRequired} value={value} onChange={handleChange} onBlur={handleBlur} />
      <p>
        <span className={`inline-flex items-center mt-2 py-1 px-2 rounded-md text-xs ${spanStatusClass} no-select`}>
          <img src={warnIcon} className={`inline-block h-3 w-3 mr-1`} alt="Warning Icon" />
          {statusMessage}
        </span>
      </p>
    </div>
  );
}
