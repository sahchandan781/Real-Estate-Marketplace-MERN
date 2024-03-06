import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true,
    },
    email: {
        type:String,
        required:true,
        unique:true,
    },
    password: {
        type:String,
        required:true,
        
    },
    avatar: {
        type: String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMEAAACUCAMAAAAd373qAAAAMFBMVEXk5ueutLfn6eqrsbXq7O2xt7rh4+Sor7Lb3t/V2Nm2u77Lz9HY29zS1de9wsTIzM69QJE0AAAEl0lEQVR4nO2cyXbDIAxFjZixDf//t8UZmjkxoPiRc3w3bbOpXiTEJDEMOzs7Ozs7Ozs7Ozs734aUIuN8ZnJD/h1tTxmkyI1BSynkER1HRwpt1lryt+2jtFLckD+I0/ALnqDBJXFv/lmETv2LIJ/EU/OPWBE99axBuajf2H/S4LqVQCp9sv8QTHrs1A1k4gr7Dxqi6VKCfzcA7kNp6lDCKFcLWNLSjLb3Hkp2vf0HN6S+vECpwAEnN6SexnOFgEUC2uwLNFYIyIE09+IEmqsEZAmdZCRya+axZ0jRx7xAoVJAlhB6UKBK8+g1NuE3DeQaBGTwyzwKTQJkhAuoS6RXjGAnmPphfHaCgQqgsdEDWQJ2jdfsgiWjIp1QPRtfYyeggmHtruytEyJwLDsGAdkJOAE0ts1mZwW4hNqwIrpB45YWLC5AhpHnUoCaElTkESBEBIWR4hIAGwiKKYiyAtC0bNgUoI7wOJYUJzCnFgzr0n8wB3gqMSqADGW+ZJrTKcYHbTvka0DL013BrqArBaiRzJmLMNm05trjBZgZrf247gJon+l/fV3EuDbVDiKAc3+AETAozaUggPZoVXewT4Hdjjde3/wDPDll8oHFndlxHPwK3GFLZuI5N/UwAYNhyUYSeZPGkY2gdTo0tQsQEjQhH1ldWvdGAPYyk+Z2F3jshXJzQoVf6pNvdIEGu2DZazY5QeILBmloc0EHNVLUchdl4TG0QLFaQg8FUgdqL2X7KFIbDqWCdQJQl0+PkK+RIDW0JOSOqqkZuKh+pCIhoVcTD5TumS2+yPGesnKvfgbxBTIFZ9ng8sAX0DDqVaEk9Yi29RXk4vNeuhtsx+1c2Q3+kxts6LwtkGh+p8HqbromXkNqWob0QzRJKXScfqPLl5SZYwjCymODV/5hhQ5xNL9h/wEiM80pxTNp9qan1qdVULbYuAVjDn/8GqTu+BkJi+VDDqExh1AIeiGEkONonCfTt5AcM4MxPkUt7cJtMjp+ZmVIc46qJazQ9t6SB+4ycqO4N/wBuUjJacm7jkZ2Nt+PMS7J87311x6RIecn18PsfMz9uqSz9zLDZRUO7AlFvs78s4o80SWDO3Ehk+qNv6iwYUZkqPwv5zVL6VVYMW6946HlURMu+48aot/wBDXbn9btxgqQWcNWqUmZFLjtP2jQcd4iMxGlhuTzQYOI7uuJiQpepajBxu/mJTL1J+1rJYgvDgcy83cdcER+7SyDHFMhyEcJ+juFg2qufVCgXIKI/JFEnNWlKzQE7kgihjbeMgnMBZw0bRZB/1jOR1FouyFwhUxsg0FtkkQfsZFpkaEYe57KkDwpSTEWiEMkMFQQYSU0V9800pyR6l/24aK5fGfjieyZhKaprbH8iYmGBYbieQuhkYYKGHJo40/U93rhB8GJyhIMYuzebaOyqBafSC/IuiKATbc0n6ipzeZqUWGhpj6eq7+DifKHUYjxKQcOZHGnSx+z8RXlTujLBeUrPM6+VyZ0oQLG/m8uyl5G4eiv4aZoLHM+B8JF2bt3nU0GR4q6RVyHw6CoFb6uEvzblORTznd9+Hixxv4Duko+8sM7O2QAAAAASUVORK5CYII=",
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;
