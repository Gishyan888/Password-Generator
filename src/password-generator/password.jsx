import React from "react";
import styles from "./password.module.css"
import { FiCopy } from "react-icons/fi"
import { useState } from "react";

function Password() {

    let [length, setLength] = useState(16)

    function range(event) {
        let length = event.target.value
        setLength(length)
    }

    const copier = async () => {
        await navigator.clipboard.writeText(password);
    }

    let [password, setPassword] = useState("")

    function generator() {
        let arrays = Object.values(arr)
        let merged = [].concat.apply([], arrays)
        setPassword(merged.sort(() => .5 - Math.random()).slice(0, length).join("").toString())
        console.log(arrays)

    }

    let [arr, setArr] = useState({
        UpCase:[],
        LwCase:[],
        Nums:[],
        Syms:[],        
    })


    function UppercaseCheck(event) {
        if (event.target.checked) {
            const alpha = Array.from(Array(26)).map((e, i) => i + 65)
            const UpperLetters = alpha.map((x) => String.fromCharCode(x))
            setArr({...arr, UpCase:UpperLetters})           
        } else{
            setArr({...arr, UpCase: []})
        }
    }
    function LowercaseCheck(event) {
        if (event.target.checked) {
            const alphabet = Array.from(Array(26)).map((e, i) => i + 97)
            const LowerLetters = alphabet.map((x) => String.fromCharCode(x))
            setArr({...arr, LwCase:LowerLetters})
        } else{
            setArr({...arr, LwCase: []})
        }
    }
    function NumbersCheck(event) {
        if (event.target.checked) {
            const num = Array.from(Array(10)).map((e, i) => i + 48)
            const Numbers = num.map((x) => String.fromCharCode(x))
            setArr({...arr, Nums:Numbers.concat(Numbers)})
        } else{
            setArr({...arr, Nums: []})
        }
    }
    function SymbolsCheck(event) {
        if (event.target.checked) {
            const Symbols = ["!", "@", "#", "$", "&", "_", "-", "/"]
            setArr({...arr, Syms:Symbols.concat(Symbols)})
        } else{
            setArr({...arr, Syms: []})
        }
    }

    return (
        <>
            <div className={styles.wrapper}>
                <h3 style={{ marginBottom: "2vh" }}>Password Generator</h3>
                <div className={styles.result}>
                    <h2 className={styles.password_result}>{password}</h2>
                    <button id="copy" className={styles.copy} onClick={copier}><FiCopy /></button>
                </div>
                <div className={styles.character}>
                    <label className={styles.character_label}>Character Length <p className={styles.character_length}>{length}</p></label>
                    <input className={styles.range} type="range" name="Character-length" id="" min={6} max={16} onInput={range} />
                    <div className={styles.checker}>
                        
                        <label className={styles.check} htmlFor="UpL" style={{ cursor: "pointer" }}><input className={styles.checkBox} style={{ cursor: "pointer" }} type="checkbox" name="" id="UpL" onChange={UppercaseCheck} />Include Uppercase Letters</label><br />
                        
                        <label className={styles.check} htmlFor="LwL" style={{ cursor: "pointer" }}><input className={styles.checkBox} style={{ cursor: "pointer" }} type="checkbox" name="" id="LwL" onChange={LowercaseCheck} />Include Lowercase Letters</label><br />
                        
                        <label className={styles.check} htmlFor="N" style={{ cursor: "pointer" }}><input className={styles.checkBox} style={{ cursor: "pointer" }} type="checkbox" name="" id="N" onChange={NumbersCheck} />Include Numbers</label><br />
                        
                        <label className={styles.check} htmlFor="S" style={{ cursor: "pointer" }}><input className={styles.checkBox} style={{ cursor: "pointer" }} type="checkbox" name="" id="S" onChange={SymbolsCheck} />Include Symbols</label>
                    </div>
                    <input type="button" value="GENERATE" className={styles.generate_btn} onClick={generator} />
                </div>

            </div>
        </>
    )
};

export default Password
