# [BOJ] 2839. 설탕 배달

num = int(input())

count = 0
while num >= 0:
    if num % 5 == 0:
        count += (num // 5)
        print(count)
        break
    num -= 3
    count += 1
else:           
    print(-1)