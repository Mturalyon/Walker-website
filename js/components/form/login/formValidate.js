function formValidate(value, error) {
    if (value.length > 0) {
        error.style.display = "none";
        return true;
    } else {
        error.style.display = "block";
        return false;
    };
};

export { formValidate };