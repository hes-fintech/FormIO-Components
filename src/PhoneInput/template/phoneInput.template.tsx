export const template = (ctx) => `
    <select id="code" className="select" ref="codeSelect" type="text" onclick="updateValue()">
        ${
            ctx.options.map(countryData => {
                return `<option value="${countryData.code}" ref="codeSelectOption">${countryData.name} (${countryData.code})</option>`
            })
        }
    </select>
    <input name="data[phoneInputComponent]" ref="phoneInput" />
`;