export default function validateInfo(values) {
    let errors = {};

    if (!values.letout.trim()) {
        errors.letout = 'you have not typed anything yet!';
    }

    return errors;
}