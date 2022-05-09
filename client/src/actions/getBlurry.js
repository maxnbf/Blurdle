import axios from 'axios';
//import FileSaver from 'file-saver'

export const getBlurry = (blur, url) => {
    return new Promise(function (resolve, reject) {
        axios({
            method: "get",
            url: `https://studio.pixelixe.com/api/blur/v1?value=${blur}&imageUrl=${url}`,
            headers: {
                Authorization: `Bearer bAyzj33zBxVIKzy6haGxWodMMIV2`,
            },
        })
            .then((res) => {
                console.log(res.data)
                //let blob = new Blob(res.data, {type: "image/png"});
                //FileSaver.saveAs(blob, "test.png");
                resolve(res)
     
            })
            .catch((err) => {
                reject(err)
                console.log('ERROR', err)
            });
    });
}