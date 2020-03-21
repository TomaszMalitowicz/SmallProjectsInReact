class App extends React.Component {
    state = {
        items: [
            { id: 1, name: "Frytki(150g)", price: 6, active: false },
            { id: 2, name: "Flaki(200ml)", price: 12, active: false },
            { id: 3, name: "Krążki cebulowe", price: 10, active: false },
            { id: 4, name: "Nuggetsy z sosem", price: 10, active: false },
            { id: 5, name: "Pieczywo", price: 2, active: false },
            { id: 6, name: "Paluszki/Chipsy/Orzeszki", price: 5, active: false },

            { id: 7, name: "Rosół", price: 10, active: false },
            { id: 8, name: "Żurek z białą kiełbasą", price: 12, active: false },
            { id: 9, name: "Zupa rybna", price: 15, active: false },
            { id: 10, name: "Zupa cebulowa", price: 15, active: false },
            { id: 11, name: "Barszcz z krokietem(krokiet z kapustą)", price: 9, active: false },

            { id: 12, name: "Schabowy, ziemniaki/frytki, surówka", price: 24, active: false },
            { id: 13, name: "Placek po węgiersku - pikantny", price: 21, active: false },
            { id: 14, name: "Pierogi ruskie( 8sztuk)", price: 12, active: false },
            { id: 15, name: "Makaron z łososiem/tuńczykiem, z bazylią i oliwkami", price: 22, active: false },
            { id: 16, name: "Nuggetsy z frytkami i surówką", price: 19, active: false },
            { id: 17, name: "Golonka z zasmażaną kapustą(40dkg)", price: 27, active: false },
            { id: 18, name: "Naleśniki wytrawne z serem i szpinakiem(dwie sztuki)", price: 13, active: false },
            { id: 19, name: "Naleśniki na słodko z dżemem(dwie sztuki)", price: 10, active: false },

            { id: 20, name: "Litovel/Hilba jasne 0,3l", price: 5, active: false },
            { id: 21, name: "Litovel/Hilba jasne 0,5l", price: 8, active: false },
            { id: 22, name: "Litovel ciemny 0,3l", price: 5, active: false },
            { id: 23, name: "Litovel ciemny 0,5l", price: 8, active: false },
            { id: 24, name: "Litovel", price: 9, active: false },
            { id: 25, name: "Cerna hora", price: 9, active: false },
            { id: 26, name: "Piwo bezalkoholowe", price: 7, active: false },

            { id: 27, name: "Babeczka czekoladowa", price: 8, active: false },
            { id: 28, name: "Szarlotka/murzynek", price: 4, active: false },
            { id: 29, name: "Szarlotka z lodami", price: 8, active: false },
            { id: 30, name: "Lody (1 gałka)", price: 4, active: false },
            { id: 31, name: "Deser lodowy z owocami i bitą śmietaną mały(2 gałki lodów)", price: 12, active: false },
            { id: 32, name: "Deser lodowy z owocami i bitą śmietaną duży(3 gałki lodów)", price: 16, active: false },

            { id: 33, name: "Espresso", price: 6, active: false },
            { id: 34, name: "Cappuccino", price: 7, active: false },
            { id: 35, name: "latte", price: 8, active: false },
            { id: 36, name: "Czarna", price: 6, active: false },
            { id: 37, name: "Czarna z mlekiem", price: 7, active: false },
            { id: 38, name: "Czekolada na gorąco", price: 9, active: false },


            { id: 39, name: "Herbata czarna", price: 4, active: false },
            { id: 40, name: "Herbata owocowa", price: 5, active: false },
            { id: 41, name: "Herbata zielona", price: 5, active: false },

            { id: 42, name: "Wódka (25ml)", price: 3, active: false },
            { id: 43, name: "Wódka z colą", price: 8, active: false },
            { id: 44, name: "Wódka z sokiem", price: 9, active: false },
            { id: 45, name: "Wódka 0,5l", price: 50, active: false },

            { id: 46, name: "Wino czerwone kieliszek (100ml)", price: 5, active: false },
            { id: 47, name: "Wino białe kieliszek (100ml)", price: 5, active: false },

            { id: 48, name: "Coca cola (250ml)", price: 4, active: false },
            { id: 49, name: "Sok Pomarańczowy", price: 5, active: false },
            { id: 50, name: "Sok Jabłkowy", price: 5, active: false },
            { id: 51, name: "Woda mineralna (250ml)", price: 8, active: false },

        ],

    }
    handleChangeStatus = (id) => {
        // console.log(id)
        const items = this.state.items.map(item => {
            if (id === item.id) {
                item.active = !item.active
            }
            return item
        })
        this.setState({
            items: items
        })
    }
    render() {
        return (
            <React.Fragment>
                <Header items={this.state.items} />
                <ListItems items={this.state.items} changeStatus={this.handleChangeStatus} />
            </React.Fragment>
        );
    }
}