import moment from "moment";

const apiKey = "1aa519799856cb357b11f7d31be7e1eb";
const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=3844421&appid=${apiKey}&units=metric&lang=es`;

export function cargarClima(){

    return fetch(apiUrl)
    .then((res)=>res.json())
    .then((res)=>{
        const data = [];
        //el clima se trae 5 dias cada 3 horas
        for (var i = 0; i < res.list.length; i = i + 8) { //obtener datos dia a dia a la misma hora
          const clima = res.list[i];
          const d = {};
        //usando el json se carga datos en array
          d.day = moment.unix(clima.dt).format('ddd'); //dia
          d.max = clima.main.temp_max;//max
          d.min = clima.main.temp_min;//min
          d.icon = `http://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`; //se trae el icon de api OpenWeather

          data.push(d);
        }

        return data;
    })
}