export default function propName(property: any, value: string) {
    var res = '';
    for (var i in property) {
        if (typeof property[i] == 'object') {
            if (propName(property[i], value)) {
                return res;
            }
        } else {
            if (property[i] == value) {
                res = i;
                return res;
            }
        }
    }
    return undefined;
}