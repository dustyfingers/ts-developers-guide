const profile = {
    name: 'alex',
    age: 25,
    coords: {
        lat: 0,
        lng: 22
    },
    setAge(age: number): void {
        this.age = age;
    }
}

// this is how to destructure from objects in ts
const { age, name }: { age: number, name: string } = profile;

const { coords: {lat, lng}}: {coords: { lat: number, lng: number }} = profile;
 