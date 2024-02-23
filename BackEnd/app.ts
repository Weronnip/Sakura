import { DetailsScore, MenuFood, Order, OrderMenu, Score, Table_Food, User, UserRole, ViewFood } from './models/schema';
import bodyParser from 'body-parser';
import { db } from './models/db';
import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';


// setting server
const app = express();
dotenv.config();

// dotenv config
const host = process.env.name_host || 'http://localhost:';
const port = process.env.host_port || 4040;

// use components library
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function method_get() {
    return (
        app.get('/', (req, res) => {
            res.send('Hello World!');
        }),

        app.get('/test', (req, res) => {
            res.send('Hello');
        }),
    
        app.get('/api/menu_foods', async (req, res) => {
            const menuFood = await db.select().from(MenuFood);
            res.json(menuFood);
        }),

        app.get('/api/menu_foods/:id', async (req, res) => {
            const menuFood = await db.select().from(MenuFood);
            res.json(menuFood);
        }),

        app.get('/api/user_role', async (req, res) => {
            const userRole = await db.select().from(UserRole);
            res.json(userRole);
        }),
        
        app.get('/api/table', async (req, res) => {
            const table = await db.select().from(Table_Food);
            res.json(table);
        }),

        app.get('/api/view_food', async (req, res) => {
            const viewFood = await db.select().from(ViewFood);
            res.json(viewFood);
        }),
        
        app.get('/api/user', async (req, res) => {
            const user = await db.select().from(User);
            res.json(user);
        }),

        app.get('/api/order', async (req, res) => {
            const order = await db.select().from(Order);
            res.json(order);
        }),

        app.get('/api/score', async (req, res) => {
            const score = await db.select().from(Score);
            res.json(score);
        }),

        app.get('/api/order_menu', async (req, res) => {
            const orderMenu = await db.select().from(OrderMenu);
            res.json(orderMenu);
        }),

        app.get('/api/details_score', async (req, res) => {
            const detailsScore = await db.select().from(DetailsScore);
            res.json(detailsScore);
        })
    )
}

function server() {

    method_get();

    try {
        app.listen(port, () => {
            console.log(`\nServer running by address: ${host + port}`);
          });
    } catch (error) {
        console.error(`Error in str: ${error}`);
    }
}

server()