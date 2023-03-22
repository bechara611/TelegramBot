// Definimos una fecha de ejemplo
export const obtenerSemana =async (fecha)=>{
    Date.prototype.getWeek = function() {
        const date = new Date(this.getTime());
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 4 - (date.getDay() || 7));
        const yearStart = new Date(date.getFullYear(), 0, 1);
        return Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
      };
      
      const numeroSemana =fecha.getWeek();
      return numeroSemana
}

// Obtenemos el número de semana utilizando la norma ISO 8601

