// import { Button, Container, Grid, TextField, Typography } from '@material-ui/core'
// import React, { useState } from 'react'
// import { firestore } from '../utils/context'
// import firebase from 'firebase'
// import { collectionName } from '../utils/consts'

const SendRequest = () => {
    return 'send request'

    // const [companyName, setCompanyName] = useState('')
    // const [aboutCompany, setAboutCompany] = useState('')
    // const [currentDomain, setCurrentDomain] = useState('')
    // const [fio, setFio] = useState('')
    // const [email, setEmail] = useState('')
    // const [phone, setPhone] = useState('')
    // const [advantages, setAdvantages] = useState('')
    // const [interactionScheme, setInteractionScheme] = useState('')
    // const [exampleSites, setExampleSites] = useState('')
    // const [colors, setColors] = useState('')
    // const [badColors, setBadColors] = useState('')
    // const [tagline, setTagline] = useState('')
    // const [menuItems, setMenuItems] = useState('')
    // const [aboutSlider, setAboutSlider] = useState('')

    //const sendForm = async () => {
    //     for (let item in document.querySelectorAll('.inputRequired')) {
    //         console.log(item)
    //     }
    //     firestore.collection(collectionName).add({
    //         companyName,
    //         aboutCompany,
    //         currentDomain,
    //         fio,
    //         email,
    //         phone,
    //         advantages,
    //         interactionScheme,
    //         exampleSites,
    //         colors,
    //         badColors,
    //         tagline,
    //         menuItems,
    //         aboutSlider,
    //         createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    //         status: 'open'
    //     })
    //     setCompanyName('')
    //     setAboutCompany('')
    //     setCurrentDomain('')
    //     setFio('')
    //     setEmail('')
    //     setPhone('')
    //     setAdvantages('')
    //     setInteractionScheme('')
    //     setInteractionScheme('')
    //     setExampleSites('')
    //     setColors('')
    //     setBadColors('')
    //     setTagline('')
    //     setMenuItems('')
    //     setAboutSlider('')
    // }

    // return (
    //     <Container>
    //         <Grid container
    //             style={{ height: window.innerHeight - 50 }}
    //             alignItems="center"
    //             justify="center"
    //         >
    //             <Grid
    //                 container
    //                 alignItems="center"
    //                 direction="column"
    //             >

    //                 <Typography variant="h6" style={{ margin: '20px', fontWeight: '400' }}>
    //                     Заявка
    //                 </Typography>

    //                 <form noValidate autoComplete="off" style={{ width: '60%' }}>
    //                     <TextField
    //                         multiline
    //                         label="Название компании"
    //                         variant="outlined"
    //                         value={companyName}
    //                         fullWidth
    //                         style={{ marginTop: '10px' }}
    //                         onChange={e => setCompanyName(e.target.value)}
    //                         className='inputRequired'
    //                         required
    //                     />
    //                     <TextField
    //                         multiline
    //                         label="О компании"
    //                         variant="outlined"
    //                         value={aboutCompany}
    //                         fullWidth
    //                         style={{ marginTop: '10px' }}
    //                         onChange={e => setAboutCompany(e.target.value)}
    //                         className='inputRequired'
    //                     />
    //                     <TextField
    //                         multiline
    //                         label="Адрес текущего сайта"
    //                         variant="outlined"
    //                         value={currentDomain}
    //                         style={{ marginTop: '10px' }}
    //                         fullWidth
    //                         onChange={e => setCurrentDomain(e.target.value)}
    //                     />
    //                     <TextField
    //                         multiline
    //                         label="ФИО контактного лица"
    //                         variant="outlined"
    //                         style={{ marginTop: '10px' }}
    //                         value={fio}
    //                         fullWidth
    //                         onChange={e => setFio(e.target.value)}
    //                     />
    //                     <TextField
    //                         multiline
    //                         label="Почта"
    //                         variant="outlined"
    //                         style={{ marginTop: '10px' }}
    //                         value={email}
    //                         fullWidth
    //                         onChange={e => setEmail(e.target.value)}
    //                     />
    //                     <TextField
    //                         multiline
    //                         label="Номер телефона"
    //                         variant="outlined"
    //                         style={{ marginTop: '10px' }}
    //                         value={phone}
    //                         fullWidth
    //                         onChange={e => setPhone(e.target.value)}
    //                     />
    //                     <TextField
    //                         multiline
    //                         label="5 преимуществ компании"
    //                         variant="outlined"
    //                         style={{ marginTop: '10px' }}
    //                         value={advantages}
    //                         fullWidth
    //                         onChange={e => setAdvantages(e.target.value)}
    //                     />
    //                     <TextField
    //                         multiline
    //                         label="Схема взаимодействия с клиентом"
    //                         variant="outlined"
    //                         style={{ marginTop: '10px' }}
    //                         value={interactionScheme}
    //                         fullWidth
    //                         onChange={e => setInteractionScheme(e.target.value)}
    //                     />
    //                     <TextField
    //                         multiline
    //                         label="Примеры сайтов"
    //                         variant="outlined"
    //                         style={{ marginTop: '10px' }}
    //                         value={exampleSites}
    //                         fullWidth
    //                         onChange={e => setExampleSites(e.target.value)}
    //                     />
    //                     <TextField
    //                         multiline
    //                         label="Слоган"
    //                         variant="outlined"
    //                         style={{ marginTop: '10px' }}
    //                         value={tagline}
    //                         fullWidth
    //                         onChange={e => setTagline(e.target.value)}
    //                     />
    //                     <TextField
    //                         multiline
    //                         label="Общая цветовая гамма"
    //                         variant="outlined"
    //                         style={{ marginTop: '10px' }}
    //                         value={colors}
    //                         fullWidth
    //                         onChange={e => setColors(e.target.value)}
    //                     />
    //                     <TextField
    //                         multiline
    //                         label="Нежелательные цвета"
    //                         variant="outlined"
    //                         style={{ marginTop: '10px' }}
    //                         value={badColors}
    //                         fullWidth
    //                         onChange={e => setBadColors(e.target.value)}
    //                     />
    //                     <TextField
    //                         multiline
    //                         label="Пункты меню"
    //                         variant="outlined"
    //                         style={{ marginTop: '10px' }}
    //                         value={menuItems}
    //                         fullWidth
    //                         onChange={e => setMenuItems(e.target.value)}
    //                     />
    //                     <TextField
    //                         multiline
    //                         label="Предпочтения для главного слайдера"
    //                         variant="outlined"
    //                         style={{ marginTop: '10px' }}
    //                         value={aboutSlider}
    //                         fullWidth
    //                         onChange={e => setAboutSlider(e.target.value)}
    //                     />
    //                     <div>
    //                         <Button variant="outlined" color="inherit" onClick={sendForm} style={{ margin: '15px 0' }}>Отправить</Button>
    //                     </div>
    //                 </form>
    //             </Grid>
    //         </Grid>
    //     </Container>
    // )
}

export default SendRequest