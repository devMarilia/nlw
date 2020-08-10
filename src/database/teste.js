const Database = require('./db'); //cost
const createProffy = require('./createProffy')

Database.then(async (db) => {
  proffyValue = {
    name: "devMarilia",
    avatar: "https://avatars0.githubusercontent.com/u/41978544?s=460&u=17626eab6fe1e54546ac855666c25da8d034e058&v=4", 
    whatsapp: "51900000000", 
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
  }

  classValue = {
    subject: 1, 
    cost: "20", 

  }

  classScheduleValues = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]

  // await createProffy(db, { proffyValue, classValue, classScheduleValues})
  // consultar os dados inseridos 

  // todos os proffys
  const selectedProffys = await db.all("SELECT * FROM proffys")
  // console.log(selectedProffys)

  // consultar classes de um determinado professor
  // e trazer junto o dados do professor
  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `)
  // console.log(selectClassesAndProffys)

  // o horário que a pessoa trabalha, por exemplo, é das 8h a - 18h
  // o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
  //o time_to precisa acima
  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "1300"
    AND class_schedule.time_to > "1300"
  `) 

  //  console.log(selectClassesSchedules)
})