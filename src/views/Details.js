import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Image, TextInput, ScrollView, ActivityIndicator } from 'react-native'
import useSWR from 'swr'

export default props => {
    const params = props.route.params
    const [weightValue, setWeightValue] = useState(0)
    //const [dataPlanet, setDataPlanet] = useState({})


    const { data, error, isValidating } = useSWR(`https://api.le-systeme-solaire.net/rest/bodies/${params.id}`,
        async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        });

    /* useEffect(() => {
        fetch(`https://api.le-systeme-solaire.net/rest/bodies/${params.id}`)
            .then((resposta) => resposta.json())
            .then((json) => { setDataPlanet(json) })
    }, []) */

    function calcGravity() {
        let calc = ((params.gravity * Number(weightValue)) / 9.7).toFixed(2)  // 9.7 é Earth G
        return isNaN(calc) ? '0.00' : calc
    }


    return (
        <ScrollView>

            < View style={{ flex: 1 }}>
                <View style={styles.topContainer}>
                    <View style={styles.input}>
                        <Text style={styles.prefix}>Seu peso na Terra:</Text>
                        <TextInput
                            placeholder="Digite aqui"
                            onChangeText={setWeightValue}
                            keyboardType="numeric"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.prefix}>Seu peso em {params.name}:</Text>
                        <TextInput
                            keyboardType="numeric"
                            underlineColorAndroid="transparent"
                            value={`${calcGravity()}`}
                            editable={false}
                        />
                    </View >
                </View >

                <View style={styles.bottomContainer}>
                    {
                        isValidating
                            ? <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <ActivityIndicator size='large' color="white" />
                            </View>
                            : <View style={{ alignItems: 'center' }}>
                                <Text style={styles.title}>{params.name}</Text>
                                <Image style={styles.image} source={params.imgSrc} />
                                <View style={{ alignItems: 'flex-start', margin: 20 }}>
                                    <Text style={styles.subtitle}>Nome em Inglês: {data.englishName}</Text>
                                    <Text style={styles.subtitle}>Tipo de astro: {data.bodyType}</Text>
                                    <Text style={styles.subtitle}>Força gravitacional: {params.gravity}G</Text>
                                    <Text style={styles.subtitle}>Massa (10^n kg): {data.mass.number}</Text>
                                    <Text style={styles.subtitle}>Densidade (g.cm^3): {data.density}</Text>
                                    <Text style={styles.subtitle}>Dimensão: {data.dimension}</Text>
                                    <Text style={styles.subtitle}>Descoberto por: {data.discoveredBy}</Text>
                                    <Text style={styles.subtitle}>Data do descobrimento: {data.discoveryDate}</Text>
                                </View>
                            </View>

                    }
                </View>
            </View >
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        height: 180,
        backgroundColor: '#fa5e23',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        color: 'white',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        marginBottom: 10,
    },
    input: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginTop: 20,
        borderRadius: 20
    },
    prefix: {
        paddingHorizontal: 10,
        fontWeight: 'bold',
        color: '#b6490e'
    },
    bottomContainer: {
        minHeight: 500,
        backgroundColor: '#2a1265',
        paddingTop: 20,

    },
    image: {
        marginTop: 20,
        height: 220,
        width: 220,
    },
});
