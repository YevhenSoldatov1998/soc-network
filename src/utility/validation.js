
export const required = value => (value ? undefined : 'required');

export const maxLength = (length) => value => {
    return (value && value.length > length ? `max symbol = ${length} , please use less characters`:undefined);
};

export const minLength = (length) => value => {
    return (value && value.length < length ? `min symbol = ${length} , please use more characters`:undefined);
};
