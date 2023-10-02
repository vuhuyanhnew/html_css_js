import  { useState } from 'react';

export default function TH1(){
    const [age, setAge] = useState(5);
  const [name, setName] = useState('');

  const onChangeAge = () => {
    setAge(age + 1);
  };

  const onChangeName = () => {
    setName('Anh');
  };

  return (
    <div>
      <div>Xin chào: {name}</div>
      <div>Tuổi là: {age}</div>
      <button onClick={onChangeAge}>Tăng tuổi thêm 1</button>
      <button onClick={onChangeName}>Hiển thị tên</button>
    </div>
  )
}