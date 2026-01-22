const { determinarEstado } = require('./logic');

test('Debe aprobar con 70', () => {
    expect(determinarEstado(70)).toBe("APROBADO");
});

test('Debe fallar con nota inválida', () => {
    expect(determinarEstado(105)).toBe("ERROR: Nota inválida");
});