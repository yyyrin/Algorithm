SELECT O.ANIMAL_ID, O.NAME
FROM ANIMAL_OUTS O
LEFT OUTER JOIN ANIMAL_INS I
ON O.ANIMAL_ID = I.ANIMAL_ID
WHERE I.ANIMAL_ID IS NULL
ORDER BY O.ANIMAL_ID;

-- LEFT OUTER JOIN: 왼쪽에 오는 테이블을 기준으로, 
-- 오른쪽에 오는 테이블과 비교하여 조건에 맞는 값이 있으면 JOIN하여 가져오고, 
-- 값이 없으면 null 값을 표시