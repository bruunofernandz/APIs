'use strict';

const internals = {};


exports.errors = {
    root: 'value',
    key: '"{{!label}}" ',
    messages: {
        wrapArrays: true
    },
    any: {
        unknown: 'não é permitido',
        invalid: 'contém um valor inválido',
        empty: 'não é permitido ficar vazio',
        required: 'é requerido',
        allowOnly: 'deve ser um dos {{valids}}',
        default: 'emitiu um erro ao executar o método padrão'
    },
    alternatives: {
        base: 'não corresponde a nenhuma das alternativas permitidas',
        child: null
    },
    array: {
        base: 'deve ser uma matriz',
        inclui: 'na posição {{pos}} não corresponde a nenhum dos tipos permitidos',
        includesSingle: 'o valor único de "{{! label}}" não corresponde a nenhum dos tipos permitidos ',
        includesOne: 'na posição {{pos}} falha porque {{reason}}',
        includesOneSingle: 'o valor único de "{{! label}}" falha porque {{reason}}',
        includesRequiredUnknowns: 'não contém {{unknownMisses}} valor (es) necessário (s)',
        includesRequiredKnowns: 'não contém {{knownMisses}}',
        includesRequiredBoth: 'não contém {{knownMisses}} e {{unknownMisses}} outros valores obrigatórios',
        excludes: 'na posição {{pos}} contém um valor excluído',
        excludesSingle: 'valor único de "{{! label}}" contém um valor excluído',
        hasKnown: 'não contém pelo menos uma correspondência necessária para o tipo "{{! patternLabel}}"',
        hasUnknown: 'não contém pelo menos uma correspondência necessária',
        min: 'deve conter pelo menos {{limit}} itens',
        max: 'deve conter itens iguais ou inferiores a {{limit}}',
        length: 'deve conter {{limit}} itens',
        ordered: 'na posição {{pos}} falha porque {{reason}}',
        ordersLength: 'na posição {{pos}} falha porque o array deve conter no máximo {{limit}} itens',
        ref: 'referencia "{{ref}}" que não é um número inteiro positivo',
        sparse: 'não deve ser uma matriz esparsa',
        unique: 'posição {{pos}} contém um valor duplicado'

    },
    boolean: {
        base: 'deve ser um boolean'
    },
    binary: {
        base: 'deve ser um buffer ou uma string',
        min: 'deve ter pelo menos {{limit}} bytes',
        max: 'deve ser menor ou igual a {{limit}} bytes',
        length: 'deve ser {{limit}} bytes'

    },
    date: {
        base: 'deve ser um número de milissegundos ou uma sequência de datas válida',
        strict: 'deve ser uma data válida',
        min: 'deve ser maior ou igual a "{{limit}}"',
        max: 'deve ser menor ou igual a "{{limit}}"',
        less: 'deve ser menor que "{{limit}}"',
        greater: 'deve ser maior que "{{limit}}"',
        isoDate: 'deve ser uma data ISO 8601 válida',
        timestamp: {
            javascript: 'deve ser um carimbo de data / hora válido ou o número de milissegundos',
            unix: 'deve ser um carimbo de data / hora válido ou número de segundos'
        },
        ref: 'referencia "{{ref}}" que não é uma data'
    },
    function: {
        base: 'deve ser uma função',
        arity: 'deve ter uma arity de {{n}}',
        minArity: 'deve ter uma aridade maior ou igual a {{n}}',
        maxArity: 'deve ter uma aridade menor ou igual a {{n}}',
        ref: 'deve ser uma referência Joi',
        class: 'deve ser uma classe'
    },
    lazy: {
        base: '!!erro de esquema: o esquema lento deve ser definido',
        schema: '!!erro de esquema: a função de esquema lento deve retornar um esquema'
    },
    object: {
        base: 'deve ser um objeto',
        child: '!! child "{{! child}}" falha porque {{reason}}',
        min: 'deve ter pelo menos {{limit}} filhos',
        max: 'deve ter um número menor ou igual a {{limit}} filhos',
        length: 'must have {{limit}} filhos',
        allowUnknown: '!! "{{! child}}" não é permitido',
        with: '!! "{{mainWithLabel}}" falta do par obrigatório "{{peerWithLabel}}"',
        without: '!! "{{mainWithLabel}}" entra em conflito com o par proibido "{{peerWithLabel}}"',
        missing: 'deve conter pelo menos um dos {{peersWithLabels}}',
        xor: 'contém um conflito entre pares exclusivos {{peersWithLabels}}',
        oxor: 'contém um conflito entre pares exclusivos opcionais {{peersWithLabels}}',
        and: 'contém {{presentWithLabels}} sem os pares necessários {{missingWithLabels}}',
        nand: '!! "{{mainWithLabel}}" não deve existir simultaneamente com {{peersWithLabels}}',
        assert: '!! "{{ref}}" a validação falhou porque "{{ref}}" falhou ao {{message}}',
        rename: {
            multiple: 'não é possível renomear o filho "{{from}}" porque várias renomeações estão desativadas e outra chave já foi renomeada para "{{to}}"',
            override: 'não é possível renomear o filho "{{from}}" porque a substituição está desativada e o destino "{{to}}" existe ',
            regex: {
                multiple: 'não é possível renomear filhos {{from}} porque várias renomeações estão desativadas e outra chave já foi renomeada para "{{to}}"',
                override: 'não é possível renomear filhos {{from}} porque a substituição está desativada e o destino "{{to}}" existe'
            }
        },
        type: 'deve ser uma instância de "{{type}}"',
        schema: 'deve ser uma instância Joi'
    },
    number: {
        base: 'deve ser um número',
        inseguro: 'deve ser um número seguro',
        min: 'deve ser maior ou igual a {{limit}}',
        max: 'deve ser menor ou igual a {{limit}}',
        less: 'deve ser menor que {{limit}}',
        greater: 'deve ser maior que {{limit}}',
        integer: 'deve ser um número inteiro',
        negative: 'deve ser um número negativo',
        positive: 'deve ser um número positivo',
        precision: 'deve ter no máximo {{limit}} casas decimais',
        ref: 'referencia "{{ref}}" que não é um número',
        multiple: 'deve ser um múltiplo de {{multiple}}',
        port: 'deve ser uma porta válida'
    },
    string: {
        base: 'deve ser uma string',
        min: 'o comprimento deve ter pelo menos {{limit}} caracteres',
        max: 'o comprimento deve ser menor ou igual a {{limit}} caracteres',
        length: 'length deve conter {{limit}} caracteres',
        alfanum: 'deve conter apenas caracteres alfanuméricos',
        token: 'deve conter apenas caracteres alfanuméricos e sublinhados',
        regex: {
            base: 'com o valor "{{! value}}" falha ao corresponder ao padrão necessário: {{pattern}}',
            name: 'with value "{{! value}}" falha ao corresponder ao padrão {{name}}',
            inverter: {
                base: 'with value "{{! value}}" corresponde ao padrão invertido: {{pattern}}',
                name: 'with value "{{! value}}" corresponde ao padrão {{name}} invertido'
            }
        },
        email: 'deve ser um email válido',
        uri: 'deve ser um uri válido',
        uriRelativeOnly: 'deve ser um uri relativo válido',
        uriCustomScheme: 'deve ser um uri válido com um esquema que corresponda ao padrão {{schema}}',
        isoDate: 'deve ser uma data ISO 8601 válida',
        guid: 'deve ser um GUID válido',
        hex: 'deve conter apenas caracteres hexadecimais',
        hexAlign: 'a representação decodificada hexadecimal deve ser alinhada por bytes',
        base64: 'deve ser uma sequência base64 válida',
        dataUri: 'deve ser uma string dataUri válida',
        hostname: 'deve ser um nome de host válido',
        normalize: 'deve ser unicode normalizado no formulário {{form}}',
        lowercase: 'deve conter apenas caracteres minúsculos',
        uppercase: 'deve conter apenas caracteres maiúsculos',
        trim: 'não deve ter espaços em branco à esquerda ou à direita',
        creditCard: 'deve ser um cartão de crédito',
        ref: 'referencia "{{ref}}" que não é um número',
        ip: 'deve ser um endereço IP válido com um CIDR {{cidr}}',
        ipVersion: 'deve ser um endereço IP válido de uma das seguintes versões {{version}} com um CIDR {{cidr}}'


    },
    symbol: {
        base: 'deve ser um símbolo',
        map: 'deve ser um dos {{map}}'
    }
};