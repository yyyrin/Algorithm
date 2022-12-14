# [BOJ] 2609. 최대공약수와 최소공배수

# 방법 1) math 모듈 이용
# import math
# a, b = map(int, input().split())
# print(math.gcd(a, b))  # 최대공약수
# print(math.lcm(a, b))  # 최소공배수
#-------------------------------------------------
# 방법 2) 일반 for문 사용 -> 시간 초과!!!
# a, b = map(int, input().split())
# for i in range(min(a, b), 0, -1):
#     if a % i == 0 and b % i == 0:
#         print(i)
#         break
#
# for j in range(max(a, b), (a*b+1)):
#     if j % a == 0 and j % b == 0:
#         print(j)
#         break
#--------------------------------------------
# 방법 3) 유클리드 호제법
# 유클리드 호제법 : x,y의 최대공약수 == y와 (x % y)의 최대공약수 (x > y)

a, b = map(int, input().split())  # 두 개의 자연수를 입력받는다.
n, m = max(a, b), min(a, b)       # n: 큰 값 / m: 작은 값
while m > 0:                      # m이 0이하가 되면 알고리즘 종료
    n, m = m, n % m               # 유클리드 호제법 이용

print(n)         # 최대공약수
print((a*b)//n)  # 최소공배수


