
const COMBINATIONS = []
const colorPalete = {
    'cuerpo': [
        ['#fac7af', '#f8bfa4'],
        ['#f8bfa4', '#f7b798'],
        ['#f7b78b', '#f6a87f'],
        ['#8c4d32', '#844631'],
        ['#946147', '#865740'],
        ['#a55b38', '#9c5635'],
        ['#c27f57', '#b37651'],
        ['#EA8E50', '#DD864B']
    ],
    'ropa': [
        ['#0B3C6E', '#12263B', '#001D3B'],
        ['#8EBAD2', '#183963', '#122b47'],
        ['#ab2917', '#4b100e', '#300909'],
        ['#0E0E66', '#232254', '#09094C'],
        ['#ff4c00', '#ff9341', '#e5803c'],
        ['#601212', '#0c1a28', '#081119'],
        ['#ED6318', '#BA4809', '#9E3B0A']
    ],
    'peinado': [
        ['#E5C6B7', '#CCAEA3', '#DBAF91'],
        ['#cb1517', '#ab2917', '#c9323a'],
        ['#112f3f', '#0a1c29', '#000000'],
        ['#f5a258', '#d88d50', '#bc0c21'],
        ['#C37A31', '#A8672C', '#331204'],
        ['#1E1A18', '#0A0807', '#ED9254'],
        ['#d8834a', '#b76f3e', '#142740'],
        ['#7c4a4f', '#643c3f', '#282624'],
        ['#8C3910', '#6E2E0B', '#42282B'],
        ['#0A358C', '#082A7F', '#663E23']
    ]
}
const skinPalete = {
    'cuerpo': ['cuerpo'],
    'peinado': [
        'peinado_1',
        'peinado_2',
        'peinado_3',
        'peinado_4',
        'peinado_5',
        'peinado_6',
        'peinado_7',
        'peinado_8',
        'peinado_9',
        'peinado_10',
        'peinado_11',
        'peinado_12',
    ],
    'ropa': [
        'ropa_1',
        'ropa_2',
        'ropa_3',
        'ropa_4',
        'ropa_5',
        'ropa_6',
        'ropa_7',
        'ropa_8'
    ]
}


// Canvas HTML
const CANVAS_1 = document.querySelector('.canvas-one')
const CANVAS_2 = document.querySelector('.canvas-two')
const CANVAS_3 = document.querySelector('.canvas-three')
const CANVAS_4 = document.querySelector('.canvas-four')
const CANVAS_5 = document.querySelector('.canvas-five')
const CANVAS_6 = document.querySelector('.canvas-six')
const CANVAS_7 = document.querySelector('.canvas-seven')
const CANVAS_8 = document.querySelector('.canvas-eight')


const app = () => {
    const ctaButton = document.querySelector('.cta')
    ctaButton.addEventListener('click', (e) => {
        if (e.detail == 1) loopOverCanvasesAndDelay()
    }) 
}

const loopOverCanvasesAndDelay = () => {
    for (let i = 0; i<8; i++) {
        if (i == 0) {
            generateArt(i + 1)
            continue;
        }
        setTimeout(() => {
            generateArt(i + 1)
        }, (i * 100) / 2)
    }
}

const populateCanvas = ({ skins, colors }, canvas, shouldRotate) => {
    let ctx;
    switch (canvas) {
        case 1:
            ctx = CANVAS_1.getContext('2d')
        break;
        case 2:
            ctx = CANVAS_2.getContext('2d')
        break;
        case 3:
            ctx = CANVAS_3.getContext('2d')
        break;
        case 4:
            ctx = CANVAS_4.getContext('2d')
        break;
        case 5:
            ctx = CANVAS_5.getContext('2d')
        break;
        case 6:
            ctx = CANVAS_6.getContext('2d')
        break;
        case 7:
            ctx = CANVAS_7.getContext('2d')
        break;
        case 8:
            ctx = CANVAS_8.getContext('2d')
        break;
    }

    ctx.clearRect(0, 0, CANVAS_1.width, CANVAS_1.height)
    ctx.imageSmoothingEnabled = false
    ctx.canvas.width = 300 
    ctx.canvas.height = 300 
    ctx.canvas.style.imageRendering = 'auto'
    const pixelRatio = window.devicePixelRatio || 1
    if(pixelRatio) {
        ctx.canvas.width *= 4
        ctx.canvas.height *= 4
        ctx.setTransform(1, 0, 0, 1, 0, 0)
    }

    // i1 
    let svgElement1 = document.querySelector('.cuerpo')
    svgElement1.childNodes[3].children[0].style.fill = colors[0][0]
    svgElement1.childNodes[3].children[1].style.fill = colors[0][1]
    if (shouldRotate) { svgElement1.style.transform = 'rotateY(180deg)' } else { svgElement1.style.transform = 'none' }
    let outerHTML1 = svgElement1.outerHTML, blob1 = new Blob([outerHTML1], {type: 'image/svg+xml;charset=utf-8'})
    let URL1 = window.URL || window.webkitURL || window 
    let blobURL1 = URL1.createObjectURL(blob1)
    let i1 = new Image()
    i1.src = blobURL1
    i1.onload = () => {
        ctx.drawImage(i1, 0, 0, CANVAS_1.width, CANVAS_1.height)
            // i2
            let svgElement3 = document.querySelector(skins[1])
            let ind = 0;
            while (ind < svgElement3.childNodes[3].children.length) {
                svgElement3.childNodes[3].children[ind].style.fill = colors[2][ind]
                ind++;
            }
            if (shouldRotate) { svgElement3.style.transform = 'rotateY(180deg)' }  else { svgElement3.style.transform = 'none' }
            let outerHTML3 = svgElement3.outerHTML, blob3 = new Blob([outerHTML3], {type: 'image/svg+xml;charset=utf-8'})
            let URL3 = window.URL || window.webkitURL || window 
            let blobURL3 = URL3.createObjectURL(blob3)
            let i3 = new Image()
            i3.src = blobURL3
            i3.onload = () => {
                ctx.drawImage(i3, 0, 0, CANVAS_1.width, CANVAS_1.height)
                    // i3 
                    let svgElement2 = document.querySelector(skins[0])
                    let ind = 0;
                    if (svgElement2.childNodes[3].children.length > 3) {
                        while (ind < svgElement2.childNodes[3].children.length) {
                            svgElement2.childNodes[3].children[ind].style.fill = colors[1][Math.floor(Math.random() * 3)]
                            ind++;
                        }
                    } else {
                        while (ind < svgElement2.childNodes[3].children.length) {
                            svgElement2.childNodes[3].children[ind].style.fill = colors[1][ind]
                            ind++;
                        }
                    }
                    if (shouldRotate) { svgElement2.style.transform = 'rotateY(180deg)' } else { svgElement2.style.transform = 'none' }
                    let outerHTML2 = svgElement2.outerHTML, blob2 = new Blob([outerHTML2], {type: 'image/svg+xml;charset=utf-8'})
                    let URL2 = window.URL || window.webkitURL || window 
                    let blobURL2 = URL2.createObjectURL(blob2)
                    let i2 = new Image()
                    i2.src = blobURL2
                    i2.onload = () => {
                        ctx.drawImage(i2, 0, 0, CANVAS_1.width, CANVAS_1.height)
                    }
            }
    }   
}



/**
* Helpers
*/
const generateArt = (canvas) => { 
    const compo = genComposition()
    const shouldRotate = Math.floor(Math.random() * 50) % 2 == 0 
    populateCanvas(compo, canvas, shouldRotate)
    indexCombination(Date.now())
}

const genComposition = () => {
    const randomColor = []
    const colorCuerpo = colorPalete['cuerpo'][Math.floor(Math.random() * colorPalete['cuerpo'].length)]
    const colorPeinado = colorPalete['peinado'][Math.floor(Math.random() * colorPalete['peinado'].length)]
    const colorRopa = colorPalete['ropa'][Math.floor(Math.random() * colorPalete['ropa'].length)]
    randomColor.push(colorCuerpo, colorPeinado, colorRopa)
    const peinadoRandom = skinPalete['peinado'][Math.floor(Math.random() * skinPalete['peinado'].length)]
    const ropaRandom = skinPalete['ropa'][Math.floor(Math.random() * skinPalete['ropa'].length)]
    let result = []
    result.push(peinadoRandom, ropaRandom)
    result = result.map((r) => '.'+ r)
    return { skins: result, colors: randomColor }
}

/**
 * Terminal Tracking (nft minting)
 */
 const terminal = document.querySelector('.combo-display')
 let tOpen = false
 terminal.addEventListener('click', () => {
     if (tOpen) {
         terminal.style.transform = 'translateY(85%)'
     } else {
         terminal.style.transform = 'translateY(0%)'
     }
     tOpen = !tOpen
 })
const nftCounter = document.querySelector('.nft-counter')
const nftList = document.querySelector('.nft-list')
const indexCombination = (combo) => {
    COMBINATIONS.push(combo)
    nftCounter.innerHTML = COMBINATIONS.length
}


/*
*
* INIT
*/
window.onload = () => {
    app()
    loopOverCanvasesAndDelay()
}



/**
 * 
 * Downloadables
 */
const downloadBlockBtn = document.getElementById('btn-block')

const download = (dwId, cvId) => {
    var download = document.getElementById(dwId);
    var image = document.getElementById(cvId)?.toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
    // download.click()
}


let zip;
const downloadBlock = () => {
    zip = new JSZip();
    downloadBlockBtn.disabled = true
    for (let i=0; i<5; i++) {
        setTimeout(() => {
            loopOverCanvasesAndDelay()
            streamAvatarGeneration()
        }, i * 2000)
    }
    setTimeout(() => {
        zip.generateAsync({type:"blob"})
        .then(function(content) {
            saveAs(content, "bodies-acnur.zip");
            downloadBlockBtn.disabled = false
        });
    }, 11000)
}

const streamAvatarGeneration = () => {
    setTimeout(() => {
        var img = zip.folder("bodies");
        for (let i=1; i<9; i++) {
            var image = document.getElementById(`canvas${i}`)?.toDataURL("image/png")
                .replace("image/png", "image/octet-stream");
            img.file(`body-${Date.now()}.png`, image.slice("data:image/octet-stream;base64,".length), { base64: true });
        }
    }, 1000)
}