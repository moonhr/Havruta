"use client";

import React, { useState } from "react";
import { IHavruta } from "@/ts/havruta.interface";

// 하브루타 작성 컴포넌트
const HavrutaForm: React.FC = () => {
  // 상태 변수 정의
  const [formData, setFormData] = useState<IHavruta>({
    date: "",
    learned: "",
    wantToKnow: "",
    currentWork: "",
    futureWork: "",
    reflection: "",
  });

  // 입력 값 변경 핸들러
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 폼 제출 핸들러
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 여기에 데이터를 처리하는 로직 추가
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">
          날짜:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="learned">알게된 것:</label>
        <textarea
          id="learned"
          name="learned"
          value={formData.learned}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="wantToKnow">알고 싶은 것:</label>
        <textarea
          id="wantToKnow"
          name="wantToKnow"
          value={formData.wantToKnow}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="currentWork">작업중인 것:</label>
        <textarea
          id="currentWork"
          name="currentWork"
          value={formData.currentWork}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="futureWork">작업할 것:</label>
        <textarea
          id="futureWork"
          name="futureWork"
          value={formData.futureWork}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="reflection">회고:</label>
        <textarea
          id="reflection"
          name="reflection"
          value={formData.reflection}
          onChange={handleChange}
        />
      </div>

      <button type="submit">제출</button>
    </form>
  );
};

export default HavrutaForm;
