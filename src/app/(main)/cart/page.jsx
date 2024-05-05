'use client'
import React, { useEffect, useState } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, TableFooter, getKeyValue} from "@nextui-org/react";
import {columns} from "@/data/cart";
import { PPDeleteIcon } from "@/components/icons/PPDeleteIcon";
import { customClientFetch } from "@/lib/api";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import PPSectionBlock from "@/components/PPSectionBlock/PPSectionBlock";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export default function CartPage() {

    const [cartItems, setCartItems] = useState([]);

    async function getCartItems () { 
        customClientFetch('/cart', "GET").then(async response => {
            let cartData = await response.json();
            let products = cartData?.products ?? [];
            products = products.map(product => {
                product.status = "ON SALE";
                return product;
            });
            setCartItems(products);
        })
    }

    async function deleteCartItem (id) {
        customClientFetch(`/cart_item/delete/${id}`, "GET").then(async response => {
            getCartItems();
        })
    }

    useEffect(() => {
        getCartItems();
    }, []);



    const renderCell = ((user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
        case "name":
            return (
            <User
                avatarProps={{radius: "lg", src: user?.images[0]?.media_preview_thumbnail}}
                description={user.email}
                name={cellValue}
            >
            </User>
            );
        case "role":
            return (
            <div className="flex flex-col">
                <p className="text-bold text-sm capitalize">$ {user.price}</p>
                <p className="text-bold text-sm capitalize text-default-400">{"KEN"}</p>
            </div>
            );
        case "status":
            return (
            <Chip className="capitalize" color={statusColorMap["active"]} size="sm" variant="flat">
                {cellValue}
            </Chip>
            );
        case "actions":
            return (
            <div className="relative flex items-center gap-2">
                <Tooltip color="danger" content="Delete user">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <div onClick={() => deleteCartItem(user?.cartItemId)}>
                    <PPDeleteIcon />
                    </div>
                </span>
                </Tooltip>
            </div>
            );
        default:
            return cellValue;
        }
  });

  return (
    <PPSectionBlock>
        <Table aria-label="Example table with custom cells">
            <TableHeader columns={columns}>
                {(column) => (
                <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                    {column.name}
                </TableColumn>
                )}
            </TableHeader>
            <TableBody items={cartItems}>
                {(item) => (
                <TableRow key={item.id}>
                    {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                </TableRow>
                )}
            </TableBody>
        </Table>
        <Link href="/checkout">
            <Button color="primary" href="/checkout">Proceed to checkout</Button>
        </Link>
        </PPSectionBlock>
    );
}
