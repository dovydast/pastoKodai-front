const adresas = document.getElementById('inputPostCode');
const ieskotiButton = document.getElementById('ieskotiPastoKodo');

ieskotiButton.addEventListener('click', infoDisplay);

async function infoDisplay() {

    const data = await fetch(`https://postit.lt/data/v2/?address=` + adresas.value + `&city=kaunas&group=street&key=AN9O98ChMrliIeqnBwnX`)
        .then(res => res.json())

    console.log(data);
    console.log(data.data[0])


    if (data.total == 0) {
        let getErrorBlock = document.getElementById('errID');
        getErrorBlock.textContent = "Tokio adreso nera";
        console.log('Toks adresas nerastas');
        let colorIt = document.getElementById('colorError');
        colorIt.classList.add('errorMsg');
        // let infoTable = document.getElementById('infoTable');
        // infoTable.remove();
    } else {

        let adressInfo = document.getElementById('addressData');
        adressInfo.textContent = data.data[0].address;
        let postcodeInfo = document.getElementById('PostCodeData');
        postcodeInfo.textContent = data.data[0].post_code;
        let colorIt = document.getElementById('colorError');
        colorIt.classList.remove('errorMsg');


    }
}

infoDisplay();