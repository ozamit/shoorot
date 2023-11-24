import React from 'react'
import "./Rules.css";
import Button from '@mui/material/Button';


const Rules = ({onClose}) => {
  return (
    <div>
    <div className="popup-container">
      <div className="popup-content">
        <h2>החוקים</h2>
        <div className="content">
            <div className='contentLine'>
            בלוח המשחק המשולש יש סהכ 30 שורות
            10 שורות מקבילות לכל פאה של המשולש בגדלים שונים, מאייקון אחד ועד 10 אייקונים בשורה
            </div>
            
            <div className='contentLine'>
            משחקים בתורות, כל שחקן בתורו מסמן אייקון אחד
            </div>

            <div className='contentLine'>
            המטרה היא לסמן את האייקון האחרון בשורה
            </div>

            <div className='contentLine'>
            השחקן שסימן את האייקון האחרון בשורה מקבל את הנקודות על כל השורה
            </div>

            <div className='contentLine'>
            סהכ הנקודות על שורה הוא כמספר האייקונים בשורה
            </div>

            <div className='contentLine'>
            למשל שורה עם 7 אייקונים = 7 נקודות
            </div>

            <div className='contentLine'>
            לא משנה כמה אייקונים סימן שחקן בשורה מסוימת, הדבר היחיד שחשוב זה מי סימן את האייקון האחרון בשורה
            </div>

            <div className='contentLine'>
            לא ניתן לסמן אייקון יותר מפעם אחת
            </div>

            <div className='contentLine'>
            כאשר כל האייקונים במשולש סומנו המשחק מסתיים והשחקן עם סהכ הנקודות הגבוה יותר מנצח במשחק כולו
            </div>


</div>
          <div className="closeBtn">
            <Button variant="outlined" onClick={onClose}> סגור </Button>
          </div>
        {/* <button className='closeBTN' onClick={onClose}>Close</button> */}
      </div>
    </div>
    </div>
  )
}

export default Rules