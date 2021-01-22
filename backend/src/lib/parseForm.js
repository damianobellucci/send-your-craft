import IncomingForm from 'formidable';
var form = new IncomingForm();

export default (req) => {
    return new Promise((resolve, reject) => {
        form.parse(req, function (err, fields, files) {
            if (err) return reject(err);
            return resolve({ fields, files });
        });
    })
}
